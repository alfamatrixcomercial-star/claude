const express = require('express');
const fs = require('fs');
const path = require('path');
const config = require('./config');
const { sendMessage, markAsRead } = require('./whatsapp');
const { chat, parseReservation, cleanReply, conversations } = require('./claude');
const { saveReservation, initSheet } = require('./sheets');
const { notificarEnzo } = require('./notify');
const db = require('./db');
const { initReservations, addReservation, updateReservation, getAll } = require('./reservations');
const { initAlerts, addAlert, markRead, getUnread } = require('./alerts');

const dashboardHTML = fs.readFileSync(path.join(__dirname, 'dashboard.html'), 'utf8');

const app = express();
app.use(express.json({ limit: '5mb' }));

// Previene procesar el mismo mensaje dos veces (WhatsApp puede reenviar)
const processedMessages = new Set();

// Previene duplicados en ManyChat (reintento de timeout o doble trigger)
const manychatProcessed = new Map(); // dedupKey -> { time, response }

// ──────────────────────────────────────
// Verificación del webhook (Meta lo llama una vez al configurar)
// ──────────────────────────────────────
app.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode === 'subscribe' && token === config.VERIFY_TOKEN) {
    console.log('Webhook verificado correctamente');
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

// ──────────────────────────────────────
// Recepción de mensajes entrantes
// ──────────────────────────────────────
app.post('/webhook', async (req, res) => {
  res.sendStatus(200); // Siempre responder rápido a Meta

  // Si ManyChat está configurado, él maneja los mensajes de WhatsApp — evita doble respuesta
  if (config.MANYCHAT_API_KEY) return;

  try {
    const entry = req.body?.entry?.[0];
    const change = entry?.changes?.[0];
    const value = change?.value;
    const message = value?.messages?.[0];

    if (!message) return;
    if (message.type !== 'text') return; // Solo texto por ahora
    if (processedMessages.has(message.id)) return;
    processedMessages.add(message.id);

    // Limpiar IDs viejos cada 1000 mensajes para no crecer infinito
    if (processedMessages.size > 1000) processedMessages.clear();

    const from = message.from;
    const text = message.text.body;

    console.log(`[${new Date().toLocaleTimeString('es-AR')}] Mensaje de ${from}: ${text}`);

    await markAsRead(message.id);

    // Procesar con Claude
    const rawReply = await chat(from, text);
    const reservation = parseReservation(rawReply);
    const replyText = cleanReply(rawReply);

    // Si hay reserva completa, guardarla en Sheets
    if (reservation) {
      try {
        await saveReservation(reservation);
        const confirmacion = replyText ||
          `✅ ¡Tu reserva quedó registrada!\n\n` +
          `📋 *${reservation.nombre} ${reservation.apellido}*\n` +
          `👥 ${reservation.personas} persona(s)\n` +
          `🕐 ${reservation.tipo?.charAt(0).toUpperCase() + reservation.tipo?.slice(1)} - ${reservation.horario} hs\n` +
          `📅 ${reservation.fecha || 'Fecha a confirmar'}\n\n` +
          `⏰ Recordá que tenés *15 minutos de tolerancia*. Pasado ese tiempo pasás a lista de espera.\n\n` +
          `¡Los esperamos! 🌊`;
        await sendMessage(from, confirmacion);
      } catch (sheetError) {
        console.error('Error guardando en Sheets:', sheetError.message);
        await sendMessage(from, replyText || '¡Reserva registrada! Los esperamos 🌊');
      }
    } else {
      await sendMessage(from, replyText);
    }
  } catch (error) {
    console.error('Error procesando mensaje:', error.message);
  }
});

// ──────────────────────────────────────
// Endpoint para ManyChat (External Request)
// ──────────────────────────────────────
app.post('/manychat', async (req, res) => {
  // ManyChat puede mandar el body como texto plano con saltos de línea
  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }

  // Full Contact Data de ManyChat
  const message = body.last_input_text || body.message;
  const phone = body.whatsapp_phone || body.phone || body.user_phone;
  const user_id = body.id || body.user_id;
  const lastBotResponse = body.custom_fields?.ai_response;

  const sessionKey = user_id || phone || 'unknown';

  // LOG DIAGNÓSTICO — ver qué manda ManyChat exactamente
  console.log(`[ManyChat] ──────────────────────────────`);
  console.log(`[ManyChat] id=${body.id} | user_id=${body.user_id}`);
  console.log(`[ManyChat] phone=${phone} | sessionKey=${sessionKey}`);
  console.log(`[ManyChat] last_input_text="${String(body.last_input_text).substring(0,80)}"`);
  console.log(`[ManyChat] message (usado)="${String(message).substring(0,80)}"`);
  console.log(`[ManyChat] hasHistory=${conversations.has(sessionKey)} | lastBot=${!!lastBotResponse}`);

  if (!message) {
    return res.status(200).json({ response: '¡Hola! Gracias por comunicarse con Mirador Waikiki. ¿En qué podemos ayudarle? 🌊' });
  }

  // Deduplicación: si el mismo usuario manda el mismo mensaje en menos de 10 segundos,
  // devolver la respuesta cacheada sin rellamar a Claude.
  // El caché se setea ANTES de llamar a Claude para evitar race conditions
  // cuando ManyChat llama dos veces en paralelo antes de que la primera termine.
  const dedupKey = `${sessionKey}:${String(message).substring(0, 100)}`;
  const cached = manychatProcessed.get(dedupKey);
  const nowMs = Date.now();
  if (cached && (nowMs - cached.time) < 10000) {
    console.log(`[ManyChat] Duplicado para ${sessionKey} msg="${String(message).substring(0,40)}", cacheado="${String(cached.response).substring(0,40)}"`);
    return res.json({ response: cached.response || '' });
  }
  // Registrar inmediatamente antes de awaitar Claude
  manychatProcessed.set(dedupKey, { time: nowMs, response: '' });

  // Si el servidor se reinició y no tiene historial, reconstruirlo
  // usando el último mensaje del bot guardado en ManyChat
  if (!conversations.has(sessionKey) && lastBotResponse) {
    console.log(`[ManyChat] Reconstruyendo historial desde last bot response`);
    conversations.set(sessionKey, [
      { role: 'assistant', content: lastBotResponse }
    ]);
  }

  try {
    const rawReply = await chat(sessionKey, message, buildOccupancyContext());

    const reservation = parseReservation(rawReply);
    const humano = rawReply.match(/##HUMANO##(\{.*?\})##FIN##/s);
    const replyText = cleanReply(rawReply).replace(/##HUMANO##.*?##FIN##/s, '').trim();

    // Reserva confirmada → guardar en Sheets y notificar a Enzo
    if (reservation) {
      const tel = reservation.telefono || phone;
      try {
        await saveReservation({ ...reservation, telefono: tel });
      } catch (sheetError) {
        console.error('Error guardando en Sheets:', sheetError.message);
      }
      addReservation({ ...reservation, telefono: tel });
      await notificarEnzo({
        tipo: 'reserva',
        cliente: `${reservation.nombre} ${reservation.apellido}`,
        personas: reservation.personas,
        horario: `${reservation.tipo} ${reservation.horario} hs`,
        fecha: reservation.fecha || '-',
        telefono: tel,
      });
    }

    // Cliente quiere hablar con humano → guardar alerta + notificar a Enzo
    if (humano) {
      addAlert({ telefono: phone || user_id });
      await notificarEnzo({
        tipo: 'humano',
        telefono: phone || user_id,
      });
    }

    // Cachear respuesta para deduplicación
    manychatProcessed.set(dedupKey, { time: Date.now(), response: replyText });
    if (manychatProcessed.size > 200) {
      const cutoff = Date.now() - 60000;
      for (const [k, v] of manychatProcessed) {
        if (v.time < cutoff) manychatProcessed.delete(k);
      }
    }

    // Guardar historial en campo de ManyChat para sobrevivir reinicios
    res.json({ response: replyText });
  } catch (error) {
    console.error('Error en /manychat:', error.message);
    res.json({ response: '¡Hola! En este momento no puedo responder. Intentá de nuevo en unos minutos 🙏' });
  }
});

// ──────────────────────────────────────
// Contexto de ocupación para el bot
// ──────────────────────────────────────
const TOTAL_MESAS = 37;
const MESAS_GRANDES = 6; // 201,207,213,62,11,17

function buildOccupancyContext() {
  const all = getAll();
  const todayAR = new Date().toLocaleDateString('es-AR', {
    timeZone: 'America/Argentina/Buenos_Aires', day: '2-digit', month: '2-digit',
  });

  const slots = {};
  for (const r of all) {
    if (r.estado === 'Cancelada' || !r.fechaReserva || r.fechaReserva === '-') continue;
    const shift = r.horario && r.horario >= '18:00' ? 'noche' : 'mediodia';
    const key = r.fechaReserva + '|' + shift;
    if (!slots[key]) slots[key] = { total: 0, grandes: 0 };
    slots[key].total++;
    if (parseInt(r.personas) >= 6) slots[key].grandes++;
  }

  const future = Object.entries(slots)
    .filter(([k]) => k.split('|')[0] >= todayAR)
    .sort((a, b) => a[0].localeCompare(b[0]));

  if (!future.length) return 'OCUPACION: Sin reservas futuras. Disponibilidad completa en todas las fechas.';

  const lines = ['OCUPACION EN TIEMPO REAL (no mostrar al cliente — solo para tomar decisiones):'];
  for (const [key, { total, grandes }] of future) {
    const [date, shift] = key.split('|');
    const pct = Math.round(total / TOTAL_MESAS * 100);
    const turno = shift === 'noche' ? 'cena' : 'almuerzo';
    let alert = '';
    if (pct >= 90) alert = ' LLENO — no aceptar mas reservas salvo cancelaciones';
    else if (pct >= 70) alert = ' CASI LLENO — mencionar que los cupos son limitados';
    let grandesAlert = grandes >= MESAS_GRANDES ? ' | MESAS GRANDES: todas ocupadas (grupos 6+ solo por orden de llegada)' : '';
    lines.push('  ' + date + ' ' + turno + ': ' + total + '/' + TOTAL_MESAS + ' mesas (' + pct + '%)' + alert + grandesAlert);
  }
  return lines.join('\n');
}

// ──────────────────────────────────────
// Dashboard de reservas
// ──────────────────────────────────────
function checkToken(req, res) {
  const token = req.query.token || req.headers['x-admin-token'];
  if (token !== config.ADMIN_TOKEN) { res.status(401).json({ error: 'Token inválido' }); return false; }
  return true;
}

app.get('/reservas', (req, res) => {
  if (!checkToken(req, res)) return;
  res.setHeader('Content-Type', 'text/html');
  res.send(dashboardHTML);
});

app.get('/api/reservas', (req, res) => {
  if (!checkToken(req, res)) return;
  res.json(getAll());
});

app.get('/api/alertas', (req, res) => {
  if (!checkToken(req, res)) return;
  res.json(getUnread());
});

app.patch('/api/alertas/:id', (req, res) => {
  if (!checkToken(req, res)) return;
  const updated = markRead(req.params.id);
  if (!updated) return res.status(404).json({ error: 'Alerta no encontrada' });
  res.json(updated);
});

app.patch('/api/reservas/:id', (req, res) => {
  if (!checkToken(req, res)) return;
  const { estado, mesa } = req.body;
  const fields = {};
  if (estado !== undefined) {
    if (!['Confirmada', 'Cancelada', 'Pendiente'].includes(estado)) {
      return res.status(400).json({ error: 'Estado inválido' });
    }
    fields.estado = estado;
  }
  if (mesa !== undefined) fields.mesa = mesa;
  if (!Object.keys(fields).length) return res.status(400).json({ error: 'Nada que actualizar' });
  const updated = updateReservation(req.params.id, fields);
  if (!updated) return res.status(404).json({ error: 'Reserva no encontrada' });
  res.json(updated);
});

// Error handler global — evita que el servidor crashee
app.use((err, req, res, next) => {
  console.error('Error global:', err.message);
  res.status(200).json({ response: '¡Hola! Gracias por comunicarse con Mirador Waikiki. ¿En qué podemos ayudarle? 🌊' });
});

process.on('uncaughtException', (err) => console.error('uncaughtException:', err.message));
process.on('unhandledRejection', (reason) => console.error('unhandledRejection:', reason));

// ──────────────────────────────────────
// Inicio del servidor
// ──────────────────────────────────────
app.listen(config.PORT, async () => {
  console.log(`🌊 Waikiki Bot corriendo en puerto ${config.PORT}`);
  if (process.env.DATABASE_URL) {
    await db.init();
    await initReservations();
    await initAlerts();
  } else {
    console.log('[DB] DATABASE_URL no configurado, usando memoria temporal');
  }
  await initSheet();
});

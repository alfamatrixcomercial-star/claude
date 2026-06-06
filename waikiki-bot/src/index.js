const express = require('express');
const config = require('./config');
const { sendMessage, markAsRead } = require('./whatsapp');
const { chat, parseReservation, cleanReply } = require('./claude');
const { saveReservation, initSheet } = require('./sheets');
const { notificarEnzo } = require('./notify');

const app = express();
app.use(express.json());

// Previene procesar el mismo mensaje dos veces (WhatsApp puede reenviar)
const processedMessages = new Set();

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
  const { message, user_id, phone, contexto } = req.body;

  const sessionKey = (phone && !phone.includes('{{')) ? phone
    : (user_id && !user_id.includes('{{')) ? user_id
    : 'unknown';

  console.log(`[ManyChat] sessionKey: ${sessionKey} | msg: ${message} | contexto: ${contexto ? 'sí' : 'no'}`);

  if (!message) {
    return res.status(400).json({ response: 'Error: falta el mensaje.' });
  }

  // Si hay contexto previo y el servidor no tiene historial, reconstruirlo
  if (contexto && !conversations.has(sessionKey)) {
    try {
      const previos = JSON.parse(contexto);
      if (Array.isArray(previos)) {
        conversations.set(sessionKey, previos);
      }
    } catch {}
  }

  try {
    const rawReply = await chat(sessionKey, message);
    await new Promise(resolve => setTimeout(resolve, 4500));

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
      if (config.MANYCHAT_API_KEY) {
        notificarEnzo({
          tipo: 'reserva',
          cliente: `${reservation.nombre} ${reservation.apellido}`,
          personas: reservation.personas,
          horario: `${reservation.tipo} ${reservation.horario} hs`,
          fecha: reservation.fecha || '-',
          telefono: tel,
        }, config.MANYCHAT_API_KEY, config.ENZO_PHONE);
      }
    }

    // Cliente quiere hablar con humano → notificar a Enzo
    if (humano && config.MANYCHAT_API_KEY) {
      notificarEnzo({
        tipo: 'humano',
        telefono: phone || user_id,
      }, config.MANYCHAT_API_KEY, config.ENZO_PHONE);
    }

    // Guardar historial en campo de ManyChat para sobrevivir reinicios
    const historial = (conversations.get(sessionKey) || []).slice(-10);
    res.json({ response: replyText, contexto: JSON.stringify(historial) });
  } catch (error) {
    console.error('Error en /manychat:', error.message);
    res.json({ response: '¡Hola! En este momento no puedo responder. Intentá de nuevo en unos minutos 🙏' });
  }
});

// ──────────────────────────────────────
// Inicio del servidor
// ──────────────────────────────────────
app.listen(config.PORT, async () => {
  console.log(`🌊 Waikiki Bot corriendo en puerto ${config.PORT}`);
  await initSheet();
});

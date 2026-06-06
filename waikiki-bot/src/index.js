const express = require('express');
const config = require('./config');
const { sendMessage, markAsRead } = require('./whatsapp');
const { chat, parseReservation, cleanReply } = require('./claude');
const { saveReservation, initSheet } = require('./sheets');

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
// Inicio del servidor
// ──────────────────────────────────────
app.listen(config.PORT, async () => {
  console.log(`🌊 Waikiki Bot corriendo en puerto ${config.PORT}`);
  await initSheet();
});

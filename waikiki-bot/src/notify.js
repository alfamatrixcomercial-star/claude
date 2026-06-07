const { sendMessage } = require('./whatsapp');
const config = require('./config');

async function notificarEnzo({ tipo, cliente, personas, horario, fecha, telefono }) {
  if (!config.WHATSAPP_TOKEN || !config.WHATSAPP_PHONE_NUMBER_ID || !config.ENZO_PHONE) {
    console.log('[Notify] Faltan WHATSAPP_TOKEN, WHATSAPP_PHONE_NUMBER_ID o ENZO_PHONE — omitiendo notificación a Enzo');
    return;
  }

  let texto;
  if (tipo === 'humano') {
    texto = `⚠️ Atención requerida\n\nUn cliente solicita hablar con una persona.\nNúmero: ${telefono}`;
  } else {
    texto =
      `🗓️ Nueva reserva confirmada\n\n` +
      `👤 ${cliente}\n` +
      `👥 ${personas} persona(s)\n` +
      `🍽️ ${horario}\n` +
      `📅 ${fecha}\n` +
      `📞 ${telefono}`;
  }

  try {
    // Número de Enzo en formato internacional sin + (Argentina: 549XXXXXXXXXX)
    const raw = config.ENZO_PHONE.replace(/\D/g, '');
    const fullNumber = raw.startsWith('54') ? raw : `549${raw}`;
    console.log(`[Notify] Enviando WhatsApp directo a ${fullNumber}`);
    await sendMessage(fullNumber, texto);
    console.log(`[Notify] ✓ Notificación enviada a Enzo`);
  } catch (err) {
    console.error('[Notify] Error enviando a Enzo:', err.response?.data || err.message);
  }
}

module.exports = { notificarEnzo };

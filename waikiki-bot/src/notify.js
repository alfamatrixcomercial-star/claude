const axios = require('axios');
const config = require('./config');

async function notificarEnzo({ tipo, cliente, personas, horario, fecha, telefono }) {
  if (!config.TELEGRAM_TOKEN || !config.ENZO_TELEGRAM_CHAT_ID) {
    console.log('[Notify] TELEGRAM_TOKEN o ENZO_TELEGRAM_CHAT_ID no configurados, omitiendo notificación');
    return;
  }

  let texto;
  if (tipo === 'humano') {
    texto = `⚠️ *Atención requerida*\n\nUn cliente solicita hablar con una persona\\.\n📞 Número: ${telefono}`;
  } else {
    texto =
      `🗓️ *Nueva reserva confirmada*\n\n` +
      `👤 ${cliente}\n` +
      `👥 ${personas} persona\\(s\\)\n` +
      `🍽️ ${horario}\n` +
      `📅 ${fecha}\n` +
      `📞 ${telefono}`;
  }

  try {
    console.log(`[Notify] Enviando Telegram a chat_id=${config.ENZO_TELEGRAM_CHAT_ID}`);
    await axios.post(`https://api.telegram.org/bot${config.TELEGRAM_TOKEN}/sendMessage`, {
      chat_id: config.ENZO_TELEGRAM_CHAT_ID,
      text: texto,
      parse_mode: 'MarkdownV2',
    });
    console.log(`[Notify] ✓ Notificación enviada a Enzo por Telegram`);
  } catch (err) {
    console.error('[Notify] Error Telegram:', err.response?.data || err.message);
  }
}

module.exports = { notificarEnzo };

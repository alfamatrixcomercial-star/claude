const axios = require('axios');

const MANYCHAT_API = 'https://api.manychat.com';

async function notificarEnzo({ tipo, cliente, personas, horario, fecha, telefono }, apiKey, enzoSubscriberId) {
  try {
    let texto;
    if (tipo === 'humano') {
      texto = `⚠️ *Atención requerida*\n\nUn cliente solicita hablar con una persona.\n📞 Número: ${telefono}`;
    } else {
      texto =
        `🗓️ *Nueva reserva confirmada*\n\n` +
        `👤 ${cliente}\n` +
        `👥 ${personas} persona(s)\n` +
        `🍽️ ${horario}\n` +
        `📅 ${fecha}\n` +
        `📞 ${telefono}`;
    }

    const res = await axios.post(
      `${MANYCHAT_API}/fb/sending/sendContent`,
      {
        subscriber_id: enzoSubscriberId,
        data: {
          version: 'v2',
          content: {
            messages: [{ type: 'text', text: texto }],
          },
        },
      },
      { headers: { Authorization: `Bearer ${apiKey}` } }
    );

    console.log(`Notificación enviada a Enzo:`, res.data?.status);
  } catch (err) {
    console.error('Error notificando a Enzo:', err.response?.data || err.message);
  }
}

module.exports = { notificarEnzo };

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

    console.log(`[Notify] Enviando a subscriber_id=${enzoSubscriberId} | apiKey=${apiKey ? apiKey.substring(0,10)+'...' : 'NO KEY'}`);
    console.log(`[Notify] Mensaje: ${texto.substring(0, 80)}`);

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

    console.log(`[Notify] Respuesta ManyChat:`, JSON.stringify(res.data));
  } catch (err) {
    console.error(`[Notify] ERROR HTTP ${err.response?.status}:`, JSON.stringify(err.response?.data) || err.message);
  }
}

module.exports = { notificarEnzo };

const axios = require('axios');
const config = require('./config');

const MANYCHAT_API = 'https://api.manychat.com';

async function notificarEnzo({ tipo, cliente, personas, horario, fecha, telefono }) {
  if (!config.MANYCHAT_API_KEY) {
    console.log('[Notify] MANYCHAT_API_KEY no configurado, omitiendo notificación');
    return;
  }

  let texto;
  if (tipo === 'humano') {
    texto = `Atencion requerida\n\nUn cliente solicita hablar con una persona.\nNumero: ${telefono}`;
  } else {
    texto =
      `Nueva reserva confirmada\n\n` +
      `${cliente}\n` +
      `${personas} persona(s)\n` +
      `${horario}\n` +
      `Fecha: ${fecha}\n` +
      `Tel: ${telefono}`;
  }

  try {
    console.log(`[Notify] Enviando a Enzo (subscriber_id=${config.ENZO_SUBSCRIBER_ID})`);
    const res = await axios.post(
      `${MANYCHAT_API}/fb/sending/sendContent`,
      {
        subscriber_id: config.ENZO_SUBSCRIBER_ID,
        data: {
          version: 'v2',
          content: {
            messages: [{ type: 'text', text: texto }],
          },
        },
        message_tag: 'CONFIRMED_EVENT_UPDATE',
      },
      { headers: { Authorization: `Bearer ${config.MANYCHAT_API_KEY}` } }
    );
    console.log(`[Notify] Respuesta ManyChat:`, JSON.stringify(res.data));
  } catch (err) {
    console.error(`[Notify] ERROR HTTP ${err.response?.status}:`, JSON.stringify(err.response?.data) || err.message);
  }
}

module.exports = { notificarEnzo };

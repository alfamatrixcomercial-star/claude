const axios = require('axios');

const MANYCHAT_API = 'https://api.manychat.com';

async function encontrarSuscriptor(phone, apiKey) {
  // Normalizar número: agregar código de país Argentina si no tiene
  const normalized = phone.startsWith('+') ? phone : `+54${phone}`;
  const res = await axios.get(`${MANYCHAT_API}/fb/subscriber/findByPhone`, {
    params: { phone: normalized },
    headers: { Authorization: `Bearer ${apiKey}` },
  });
  return res.data?.data?.id || null;
}

async function notificarEnzo({ tipo, cliente, personas, horario, fecha, telefono }, apiKey, enzoPhone) {
  try {
    const suscriptorId = await encontrarSuscriptor(enzoPhone, apiKey);
    if (!suscriptorId) {
      console.error('No se encontró a Enzo como suscriptor en ManyChat');
      return;
    }

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

    await axios.post(
      `${MANYCHAT_API}/fb/sending/sendContent`,
      {
        subscriber_id: suscriptorId,
        data: {
          version: 'v2',
          content: {
            messages: [{ type: 'text', text: texto }],
          },
        },
      },
      { headers: { Authorization: `Bearer ${apiKey}` } }
    );

    console.log(`Notificación enviada a Enzo (${enzoPhone})`);
  } catch (err) {
    console.error('Error notificando a Enzo:', err.response?.data || err.message);
  }
}

module.exports = { notificarEnzo };

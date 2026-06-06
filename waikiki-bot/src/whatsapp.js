const axios = require('axios');
const config = require('./config');

const BASE_URL = `https://graph.facebook.com/v19.0/${config.WHATSAPP_PHONE_NUMBER_ID}/messages`;

const headers = () => ({
  Authorization: `Bearer ${config.WHATSAPP_TOKEN}`,
  'Content-Type': 'application/json',
});

async function sendMessage(to, text) {
  await axios.post(BASE_URL, {
    messaging_product: 'whatsapp',
    to,
    type: 'text',
    text: { body: text },
  }, { headers: headers() });
}

async function markAsRead(messageId) {
  await axios.post(BASE_URL.replace('/messages', '/messages'), {
    messaging_product: 'whatsapp',
    status: 'read',
    message_id: messageId,
  }, { headers: headers() }).catch(() => {}); // No crítico si falla
}

module.exports = { sendMessage, markAsRead };

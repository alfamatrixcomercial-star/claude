require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3000,
  WHATSAPP_TOKEN: process.env.WHATSAPP_TOKEN,
  WHATSAPP_PHONE_NUMBER_ID: process.env.WHATSAPP_PHONE_NUMBER_ID,
  VERIFY_TOKEN: process.env.VERIFY_TOKEN || 'waikiki_secret',
  ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
  GOOGLE_SHEET_ID: process.env.GOOGLE_SHEET_ID,
  GOOGLE_SERVICE_ACCOUNT_EMAIL: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,
  WOKI_LINK: process.env.WOKI_LINK,
  MANYCHAT_API_KEY: process.env.MANYCHAT_API_KEY,
  TELEGRAM_TOKEN: process.env.TELEGRAM_TOKEN,
  ENZO_TELEGRAM_CHAT_ID: process.env.ENZO_TELEGRAM_CHAT_ID,
  ADMIN_TOKEN: process.env.ADMIN_TOKEN || 'waikiki2025',
  DATA_DIR: process.env.DATA_DIR || '/tmp',
  // Números bloqueados: no activan el bot. Separados por coma en la variable de entorno.
  // Ejemplo: BLOCKED_PHONES=5492235551234,5492236667890
  BLOCKED_PHONES: new Set(
    (process.env.BLOCKED_PHONES || '').split(',').map(n => n.trim()).filter(Boolean)
  ),
};

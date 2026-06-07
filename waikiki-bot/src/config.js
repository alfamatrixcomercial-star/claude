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
  ENZO_PHONE: process.env.ENZO_PHONE,
};

const { google } = require('googleapis');
const config = require('./config');

function getAuth() {
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: config.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: config.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
}

async function saveReservation(data) {
  const auth = getAuth();
  const sheets = google.sheets({ version: 'v4', auth });

  const now = new Date().toLocaleString('es-AR', {
    timeZone: 'America/Argentina/Buenos_Aires',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const row = [
    now,
    `${data.nombre} ${data.apellido}`,
    data.personas,
    data.tipo ? data.tipo.charAt(0).toUpperCase() + data.tipo.slice(1) : '',
    data.horario,
    data.fecha || '-',
    data.telefono,
    'Pendiente',
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId: config.GOOGLE_SHEET_ID,
    range: 'Reservas!A:H',
    valueInputOption: 'USER_ENTERED',
    resource: { values: [row] },
  });

  console.log(`Reserva guardada: ${data.nombre} ${data.apellido} - ${data.tipo} ${data.horario}`);
}

async function initSheet() {
  try {
    const auth = getAuth();
    const sheets = google.sheets({ version: 'v4', auth });

    const header = [[
      'Fecha/Hora ingreso', 'Nombre completo', 'Personas',
      'Servicio', 'Horario', 'Fecha reserva', 'Teléfono', 'Estado',
    ]];

    // Solo escribe el encabezado si la hoja está vacía
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: config.GOOGLE_SHEET_ID,
      range: 'Reservas!A1',
    });

    if (!res.data.values) {
      await sheets.spreadsheets.values.update({
        spreadsheetId: config.GOOGLE_SHEET_ID,
        range: 'Reservas!A1',
        valueInputOption: 'USER_ENTERED',
        resource: { values: header },
      });
      console.log('Encabezados de Google Sheets creados');
    }
  } catch (err) {
    console.error('Error iniciando Google Sheets:', err.message);
  }
}

module.exports = { saveReservation, initSheet };

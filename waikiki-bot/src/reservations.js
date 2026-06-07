const fs = require('fs');
const path = require('path');
const config = require('./config');

const FILE = path.join(config.DATA_DIR, 'waikiki_reservations.json');

function load() {
  try {
    if (fs.existsSync(FILE)) return JSON.parse(fs.readFileSync(FILE, 'utf8'));
  } catch {}
  return [];
}

function save(list) {
  try { fs.writeFileSync(FILE, JSON.stringify(list)); } catch {}
}

const list = load();

function addReservation(data) {
  const now = new Date().toLocaleString('es-AR', {
    timeZone: 'America/Argentina/Buenos_Aires',
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });
  const res = {
    id: Date.now().toString(),
    fechaIngreso: now,
    nombre: `${data.nombre || ''} ${data.apellido || ''}`.trim(),
    personas: data.personas || '-',
    tipo: data.tipo || '',
    menu: data.menu || '',
    horario: data.horario || '-',
    fechaReserva: data.fecha || '-',
    telefono: data.telefono || '-',
    estado: 'Pendiente',
    mesa: '',
  };
  list.push(res);
  save(list);
  return res;
}

function updateReservation(id, fields) {
  const res = list.find(r => r.id === id);
  if (res) { Object.assign(res, fields); save(list); }
  return res || null;
}

function getAll() {
  return [...list].reverse();
}

module.exports = { addReservation, updateReservation, getAll };

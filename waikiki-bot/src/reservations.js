const fs = require('fs');

const FILE = '/tmp/waikiki_reservations.json';

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
  };
  list.push(res);
  save(list);
  return res;
}

function updateStatus(id, estado) {
  const res = list.find(r => r.id === id);
  if (res) { res.estado = estado; save(list); }
  return res || null;
}

function getAll() {
  return [...list].reverse();
}

module.exports = { addReservation, updateStatus, getAll };

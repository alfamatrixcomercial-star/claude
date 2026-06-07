const db = require('./db');

const list = [];

async function initReservations() {
  try {
    const rows = await db.getTable('reservations');
    list.push(...rows);
    console.log('[Reservations] Cargadas desde DB:', list.length);
  } catch (e) {
    console.error('[Reservations] Error cargando desde DB:', e.message);
  }
}

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
  db.upsert('reservations', res.id, res).catch(e => console.error('[Reservations] Error guardando:', e.message));
  return res;
}

function updateReservation(id, fields) {
  const res = list.find(r => r.id === id);
  if (res) {
    Object.assign(res, fields);
    db.upsert('reservations', res.id, res).catch(e => console.error('[Reservations] Error actualizando:', e.message));
  }
  return res || null;
}

function getAll() {
  return [...list].reverse();
}

module.exports = { initReservations, addReservation, updateReservation, getAll };

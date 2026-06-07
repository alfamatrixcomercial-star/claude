const db = require('./db');

const list = [];

async function initAlerts() {
  try {
    const rows = await db.getTable('alerts');
    list.push(...rows);
    console.log('[Alerts] Cargadas desde DB:', list.length);
  } catch (e) {
    console.error('[Alerts] Error cargando desde DB:', e.message);
  }
}

function addAlert(data) {
  const now = new Date().toLocaleString('es-AR', {
    timeZone: 'America/Argentina/Buenos_Aires',
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });
  const alert = { id: Date.now().toString(), timestamp: now, telefono: data.telefono || '-', leida: false };
  list.push(alert);
  db.upsert('alerts', alert.id, alert).catch(e => console.error('[Alerts] Error guardando:', e.message));
  return alert;
}

function markRead(id) {
  const a = list.find(a => a.id === id);
  if (a) {
    a.leida = true;
    db.upsert('alerts', a.id, a).catch(e => console.error('[Alerts] Error actualizando:', e.message));
  }
  return a || null;
}

function getUnread() {
  return [...list].reverse().filter(a => !a.leida);
}

module.exports = { initAlerts, addAlert, markRead, getUnread };

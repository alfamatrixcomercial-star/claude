const fs = require('fs');
const FILE = '/tmp/waikiki_alerts.json';

function load() {
  try { if (fs.existsSync(FILE)) return JSON.parse(fs.readFileSync(FILE, 'utf8')); } catch {}
  return [];
}

function save(list) {
  try { fs.writeFileSync(FILE, JSON.stringify(list)); } catch {}
}

const list = load();

function addAlert(data) {
  const now = new Date().toLocaleString('es-AR', {
    timeZone: 'America/Argentina/Buenos_Aires',
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });
  const alert = { id: Date.now().toString(), timestamp: now, telefono: data.telefono || '-', leida: false };
  list.push(alert);
  save(list);
  return alert;
}

function markRead(id) {
  const a = list.find(a => a.id === id);
  if (a) { a.leida = true; save(list); }
  return a || null;
}

function getUnread() {
  return [...list].reverse().filter(a => !a.leida);
}

module.exports = { addAlert, markRead, getUnread };

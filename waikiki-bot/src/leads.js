const db = require('./db');

const list = [];

async function initLeads() {
  try {
    const rows = await db.getTable('leads');
    list.push(...rows);
    console.log('[Leads] Cargados desde DB:', list.length);
  } catch (e) {
    console.error('[Leads] Error cargando desde DB:', e.message);
  }
}

function addLead(data) {
  const now = new Date().toLocaleString('es-AR', {
    timeZone: 'America/Argentina/Buenos_Aires',
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });
  const lead = {
    id: Date.now().toString(),
    timestamp: now,
    tipo: data.tipo || 'cv',           // 'cv' | 'show'
    telefono: data.telefono || '-',
    detalle: data.detalle || '-',
  };
  list.push(lead);
  db.upsert('leads', lead.id, lead).catch(e => console.error('[Leads] Error guardando:', e.message));
  return lead;
}

function getAllLeads() {
  return [...list].reverse();
}

module.exports = { initLeads, addLead, getAllLeads };

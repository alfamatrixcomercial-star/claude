'use strict';

const STORAGE_KEY = 'restaurante_x_tasks';
const SECTORS = ['cocina', 'barra', 'sala', 'caja', 'limpieza'];

// ── State ──────────────────────────────────────────────────────────────
let tasks = load();

function load() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
  catch { return []; }
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function genId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

// ── Mutations ──────────────────────────────────────────────────────────
function addTask(sector, text, priority) {
  tasks.unshift({ id: genId(), sector, text, priority, done: false, createdAt: Date.now() });
  save();
  render();
}

function toggleTask(id) {
  const t = tasks.find(t => t.id === id);
  if (t) { t.done = !t.done; save(); render(); }
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  save();
  render();
}

// ── Render ─────────────────────────────────────────────────────────────
function render() {
  const pending = tasks.filter(t => !t.done);
  const done    = tasks.filter(t =>  t.done);

  // Stats
  document.getElementById('total-pending').textContent = pending.length;
  document.getElementById('total-done').textContent    = done.length;
  document.getElementById('done-count').textContent    = done.length;

  // Sector lists
  for (const sector of SECTORS) {
    const list  = document.querySelector(`.task-list[data-sector="${sector}"]`);
    const badge = document.getElementById(`badge-${sector}`);
    const items = pending.filter(t => t.sector === sector);
    badge.textContent = items.length;
    list.innerHTML = items.map(taskHTML).join('');
  }

  // Done list
  const doneList = document.getElementById('done-list');
  doneList.innerHTML = done.map(t => taskHTML(t, true)).join('');
}

function taskHTML(t, showSector = false) {
  const time   = relativeTime(t.createdAt);
  const label  = showSector ? `<span class="task-sector-label">${sectorLabel(t.sector)}</span>` : '';
  return `
    <li class="task-item${t.done ? ' done' : ''}" data-id="${t.id}">
      <input type="checkbox" class="task-check" ${t.done ? 'checked' : ''}
             onchange="toggleTask('${t.id}')" title="Marcar como ${t.done ? 'pendiente' : 'completada'}">
      <div class="task-body">
        <span class="task-text">${esc(t.text)}</span>
        <div class="task-meta">
          <span class="priority-dot ${t.priority}" title="Prioridad ${t.priority}"></span>
          <span class="task-time">${time}${label ? ' · ' : ''}</span>
          ${label}
        </div>
      </div>
      <button class="btn-delete" onclick="deleteTask('${t.id}')" title="Eliminar">✕</button>
    </li>`;
}

function sectorLabel(s) {
  return { cocina:'Cocina', barra:'Barra', sala:'Sala', caja:'Caja', limpieza:'Limpieza' }[s] || s;
}

function relativeTime(ts) {
  const diff = Date.now() - ts;
  if (diff < 60_000)   return 'Ahora';
  if (diff < 3_600_000) return `${Math.floor(diff/60_000)}m`;
  if (diff < 86_400_000) return `${Math.floor(diff/3_600_000)}h`;
  return `${Math.floor(diff/86_400_000)}d`;
}

function esc(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
            .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

// ── Event listeners ────────────────────────────────────────────────────
document.getElementById('btn-add').addEventListener('click', () => {
  const sector   = document.getElementById('select-sector').value;
  const text     = document.getElementById('task-input').value.trim();
  const priority = document.getElementById('select-priority').value;

  if (!sector) { alert('Por favor seleccioná un sector.'); return; }
  if (!text)   { alert('Escribí una tarea.'); return; }

  addTask(sector, text, priority);

  document.getElementById('task-input').value = '';
  document.getElementById('task-input').focus();
});

document.getElementById('task-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') document.getElementById('btn-add').click();
});

document.getElementById('toggle-done').addEventListener('click', () => {
  const list = document.getElementById('done-list');
  list.classList.toggle('hidden');
});

document.getElementById('year').textContent = new Date().getFullYear();

// ── Init ───────────────────────────────────────────────────────────────
render();

// Refresh relative times every minute
setInterval(render, 60_000);

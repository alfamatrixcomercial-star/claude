const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

async function init() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS reservations (id TEXT PRIMARY KEY, data JSONB NOT NULL);
    CREATE TABLE IF NOT EXISTS alerts (id TEXT PRIMARY KEY, data JSONB NOT NULL);
  `);
}

async function getTable(table) {
  const res = await pool.query('SELECT data FROM ' + table + ' ORDER BY (data->>\'id\')::bigint ASC');
  return res.rows.map(r => r.data);
}

async function upsert(table, id, data) {
  await pool.query(
    'INSERT INTO ' + table + ' (id, data) VALUES ($1, $2) ON CONFLICT (id) DO UPDATE SET data = $2',
    [id, JSON.stringify(data)]
  );
}

module.exports = { init, getTable, upsert };

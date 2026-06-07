#!/usr/bin/env node
/**
 * Waikiki Bot — Test de 100 mensajes ENROSCADOS (casos borde y trampas)
 * Uso: node waikiki-bot/test-messages-2.js https://claude-production-d7ca.up.railway.app
 */

const https = require('https');
const http  = require('http');

const BASE_URL = process.argv[2] || process.env.BOT_URL || 'http://localhost:3000';
const DELAY_MS = 900;

const MESSAGES = [

  // ── 1. HULA KAI EN INVIERNO (ahora cerrado — junio) ──────────────────────
  { cat: 'hula-kai-invierno', msg: 'Quiero ir a la piscina este fin de semana' },
  { cat: 'hula-kai-invierno', msg: 'Cuánto sale entrar a Hula Kai hoy?' },
  { cat: 'hula-kai-invierno', msg: 'La pileta está abierta en junio?' },
  { cat: 'hula-kai-invierno', msg: 'Quiero reservar una sombrilla para el sábado' },
  { cat: 'hula-kai-invierno', msg: 'Cuál es el precio de los camastros ahora?' },
  { cat: 'hula-kai-invierno', msg: 'Hay piscina disponible esta semana?' },

  // ── 2. CENAR EN DÍA DE SEMANA (trampa: solo almuerzo disponible) ─────────
  { cat: 'cena-invalida',     msg: 'Quiero reservar para cenar el martes' },
  { cat: 'cena-invalida',     msg: 'Reserva para el miércoles a las 21hs para 2 personas' },
  { cat: 'cena-invalida',     msg: 'Cena el lunes? Para 4 personas' },
  { cat: 'cena-invalida',     msg: 'Reserva el jueves a la noche' },
  { cat: 'cena-invalida',     msg: 'Quiero cenar el domingo, tienen lugar?' },
  { cat: 'cena-invalida',     msg: 'Pueden anotar: Pablo Ruiz, 3 personas, miércoles 22hs, 2235001234' },

  // ── 3. HORARIOS TRAMPA / INEXISTENTES ────────────────────────────────────
  { cat: 'horario-trampa',    msg: 'Reserva viernes a las 20hs' },
  { cat: 'horario-trampa',    msg: 'Quiero el turno de las 13hs' },
  { cat: 'horario-trampa',    msg: 'Reserva sábado 23hs, para 2' },
  { cat: 'horario-trampa',    msg: 'Mediodía a las 11:30, hay lugar?' },
  { cat: 'horario-trampa',    msg: 'Puede ser a las 12:45 el sábado?' },
  { cat: 'horario-trampa',    msg: 'Reserva para las 21:15' },

  // ── 4. RESERVA DESAYUNO / MERIENDA (no se reserva) ───────────────────────
  { cat: 'desayuno-reserva',  msg: 'Quiero reservar para desayunar mañana' },
  { cat: 'desayuno-reserva',  msg: 'Puedo reservar una mesa para las 10hs?' },
  { cat: 'desayuno-reserva',  msg: 'Reserva para la merienda el domingo a las 17hs' },
  { cat: 'desayuno-reserva',  msg: 'Tengo que reservar para tomar el té?' },

  // ── 5. GRUPOS 11+ (debe derivar a Mar Eventos) ────────────────────────────
  { cat: 'grupo-11plus',      msg: 'Somos 12 primos, quieren cenar juntos el sábado' },
  { cat: 'grupo-11plus',      msg: 'Reunion de empresa, 25 personas, para el viernes' },
  { cat: 'grupo-11plus',      msg: 'Necesito mesa para 11 el 14/06' },
  { cat: 'grupo-11plus',      msg: 'Casamiento chico, 30 personas, tienen salón?' },

  // ── 6. MASCOTAS — CASOS BORDE ─────────────────────────────────────────────
  { cat: 'mascotas',          msg: 'Puedo llevar a mi perro si es pequeño?' },
  { cat: 'mascotas',          msg: 'Tengo un perro de servicio (lazarillo), puedo entrar?' },
  { cat: 'mascotas',          msg: 'Puedo atar mi perro afuera mientras como?' },
  { cat: 'mascotas',          msg: 'Cuál es la política con mascotas en la terraza?' },

  // ── 7. MENORES — CONFUSIÓN CON HULA KAI ──────────────────────────────────
  { cat: 'menores',           msg: 'Voy con mis hijos de 10 y 12 años, pueden entrar?' },
  { cat: 'menores',           msg: 'Tengo un bebé de 8 meses, hay silla?' },
  { cat: 'menores',           msg: 'Mi hijo tiene 17 años, puede entrar a la pileta?' },
  { cat: 'menores',           msg: 'Somos una familia con 3 chicos, aceptan?' },

  // ── 8. PRECIOS DIRECTOS (deben redirigir a carta digital) ─────────────────
  { cat: 'precios',           msg: 'Cuánto sale un bife?' },
  { cat: 'precios',           msg: 'Qué precio tiene la entrada?' },
  { cat: 'precios',           msg: 'Cuánto me sale ir a almorzar más o menos?' },
  { cat: 'precios',           msg: 'Hay menú ejecutivo? Cuánto sale?' },
  { cat: 'precios',           msg: 'Me mandan la lista de precios?' },
  { cat: 'precios',           msg: 'Cuánto sale el cubierto?' },

  // ── 9. SUSHI — TRAMPA DE FECHAS Y DATOS ──────────────────────────────────
  { cat: 'sushi-trampa',      msg: 'Hay sushi todos los viernes?' },
  { cat: 'sushi-trampa',      msg: 'Quiero el menú de sushi para el viernes 19' },
  { cat: 'sushi-trampa',      msg: 'Pueden reservar para el 12/06 menú sushi a las 23hs?' },
  { cat: 'sushi-trampa',      msg: 'El 12/06 puedo pedir sushi a la carta sin el menú fijo?' },
  { cat: 'sushi-trampa',      msg: 'Son vegetarianas las gyosas del evento?' },
  { cat: 'sushi-trampa',      msg: 'El menú de sushi tiene opciones sin TACC?' },

  // ── 10. TERRAZA — NO SE RESERVA ──────────────────────────────────────────
  { cat: 'terraza',           msg: 'Quiero reservar una mesa en la terraza' },
  { cat: 'terraza',           msg: 'Tienen mesas afuera? Se puede reservar?' },
  { cat: 'terraza',           msg: 'Prefiero sentarme en la terraza con vista al mar' },

  // ── 11. DATOS CONTRADICTORIOS EN RESERVA ─────────────────────────────────
  { cat: 'datos-contradictorios', msg: 'Reserva martes 21hs para 3 personas' },   // día inválido para cena
  { cat: 'datos-contradictorios', msg: 'Somos 2 pero queremos mesa para 10' },
  { cat: 'datos-contradictorios', msg: 'Quiero reservar para el sábado a las 12hs y también a las 21hs' },
  { cat: 'datos-contradictorios', msg: 'Reserva para mañana a las 21:30 (es lunes)' },

  // ── 12. CANCELAR / MODIFICAR RESERVA ─────────────────────────────────────
  { cat: 'cancelar',          msg: 'Quiero cancelar mi reserva de mañana' },
  { cat: 'cancelar',          msg: 'Tengo que cambiar el horario de mi reserva' },
  { cat: 'cancelar',          msg: 'Puedo agregar una persona a mi reserva?' },
  { cat: 'cancelar',          msg: 'No puedo ir más, cómo aviso?' },

  // ── 13. WIFI — PREGUNTAS ESPECÍFICAS ─────────────────────────────────────
  { cat: 'wifi',              msg: 'Tienen wifi?' },
  { cat: 'wifi',              msg: 'Cuál es la contraseña del wifi?' },
  { cat: 'wifi',              msg: 'Cómo me conecto al wifi del lugar?' },

  // ── 14. ACCESIBILIDAD DETALLADA ───────────────────────────────────────────
  { cat: 'accesibilidad',     msg: 'Entro en silla de ruedas sin problema?' },
  { cat: 'accesibilidad',     msg: 'Hay escaleras para entrar al restaurante?' },
  { cat: 'accesibilidad',     msg: 'El baño es accesible para discapacitados?' },

  // ── 15. MÉTODOS DE PAGO INUSUALES ────────────────────────────────────────
  { cat: 'pago-inusual',      msg: 'Aceptan dólares?' },
  { cat: 'pago-inusual',      msg: 'Puedo pagar con cheque?' },
  { cat: 'pago-inusual',      msg: 'Aceptan criptomonedas?' },
  { cat: 'pago-inusual',      msg: 'Tienen cuotas sin interés?' },
  { cat: 'pago-inusual',      msg: 'Tienen descuento jubilados?' },

  // ── 16. TOLERANCIA / LLEGADA TARDE ───────────────────────────────────────
  { cat: 'tolerancia',        msg: 'Si llego 20 minutos tarde pierdo la reserva?' },
  { cat: 'tolerancia',        msg: 'Qué pasa si me atraso?' },
  { cat: 'tolerancia',        msg: 'Si aviso que llego tarde me guardan la mesa?' },

  // ── 17. SERVICIOS INEXISTENTES ───────────────────────────────────────────
  { cat: 'no-existe',         msg: 'Tienen servicio de delivery?' },
  { cat: 'no-existe',         msg: 'Hacen take away?' },
  { cat: 'no-existe',         msg: 'Tienen happy hour?' },
  { cat: 'no-existe',         msg: 'Tienen menú infantil?' },
  { cat: 'no-existe',         msg: 'Tienen servicio de valet parking?' },

  // ── 18. IDIOMA Y FORMATO INUSUALES ───────────────────────────────────────
  { cat: 'formato-raro',      msg: 'Hello, do you speak English? I want to make a reservation' },
  { cat: 'formato-raro',      msg: 'RESERVA URGENTE: SANTIAGO GOMEZ / 8 PERSONAS / SABADO / 21:30 / 2231112233' },
  { cat: 'formato-raro',      msg: '📅 sábado | 👥 4 personas | 🕘 21hs | reserva pls' },
  { cat: 'formato-raro',      msg: 'nombre: valentina / cant: 2 / dia: viernes / hs: 12 / cel: 2234445566' },

  // ── 19. CONSULTAS SOBRE EL HOTEL ─────────────────────────────────────────
  { cat: 'hotel',             msg: 'Tienen habitaciones disponibles?' },
  { cat: 'hotel',             msg: 'Cuánto sale alojarse?' },
  { cat: 'hotel',             msg: 'El hotel tiene piscina?' },
  { cat: 'hotel',             msg: 'Cómo me comunico con el hotel?' },

  // ── 20. PREGUNTAS SOBRE VISTA / EXPERIENCIA ───────────────────────────────
  { cat: 'experiencia',       msg: 'Desde todas las mesas se ve el mar?' },
  { cat: 'experiencia',       msg: 'Es un buen lugar para una cena romántica?' },
  { cat: 'experiencia',       msg: 'Tienen música en vivo?' },
  { cat: 'experiencia',       msg: 'Hay estacionamiento para motos?' },
  { cat: 'experiencia',       msg: 'Abren en días de lluvia?' },

  // ── 21. MENSAJES MUY CORTOS O ABSURDOS ───────────────────────────────────
  { cat: 'edge',              msg: '.' },
  { cat: 'edge',              msg: 'No' },
  { cat: 'edge',              msg: 'reserva' },
  { cat: 'edge',              msg: 'Quiero ir' },
  { cat: 'edge',              msg: 'Están bien de precios?' },
];

// ── UTILS ──────────────────────────────────────────────────────────────────
function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

function post(url, body) {
  return new Promise((resolve, reject) => {
    const parsed  = new URL(url);
    const lib     = parsed.protocol === 'https:' ? https : http;
    const data    = JSON.stringify(body);
    const options = {
      hostname: parsed.hostname,
      port:     parsed.port || (parsed.protocol === 'https:' ? 443 : 80),
      path:     parsed.pathname,
      method:   'POST',
      headers:  { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(data) },
      timeout:  35000,
    };
    const req = lib.request(options, res => {
      let buf = '';
      res.on('data', d => buf += d);
      res.on('end', () => {
        try { resolve({ status: res.statusCode, body: JSON.parse(buf) }); }
        catch { resolve({ status: res.statusCode, body: buf }); }
      });
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
    req.write(data);
    req.end();
  });
}

// ── MAIN ───────────────────────────────────────────────────────────────────
async function main() {
  const url = BASE_URL + '/manychat';
  console.log('\n🌊 WAIKIKI BOT — TEST ENROSCADO (casos borde y trampas)');
  console.log('='.repeat(60));
  console.log('URL:', url);
  console.log('Total mensajes:', MESSAGES.length);
  console.log('='.repeat(60) + '\n');

  const results = [];

  for (let i = 0; i < MESSAGES.length; i++) {
    const { cat, msg } = MESSAGES[i];
    const userId = 'test2_' + cat + '_' + i;
    process.stdout.write(`[${String(i+1).padStart(3)}/${MESSAGES.length}] ${cat.padEnd(22)} | ${msg.substring(0,38).padEnd(40)} → `);

    try {
      const t0  = Date.now();
      const res = await post(url, { id: userId, last_input_text: msg, whatsapp_phone: '5492235559999' });
      const ms  = Date.now() - t0;
      const reply = res.body?.response || '';

      const flag = res.status !== 200 ? '🔴 HTTP ' + res.status
                 : !reply             ? '⚠️  VACÍO'
                 : reply.length > 900  ? '⚠️  LARGO'
                 : '✅';

      console.log(flag + ' (' + ms + 'ms, ' + reply.length + ' chars)');
      results.push({ i: i+1, cat, msg, reply, ms, status: res.status, flag });
    } catch (err) {
      console.log('🔴 ERROR: ' + err.message);
      results.push({ i: i+1, cat, msg, reply: '', ms: 0, status: 0, flag: '🔴 ' + err.message });
    }

    if (i < MESSAGES.length - 1) await delay(DELAY_MS);
  }

  // ── REPORTE ──
  console.log('\n' + '='.repeat(60));
  console.log('REPORTE FINAL — DETALLE POR CATEGORÍA');
  console.log('='.repeat(60));

  const cats = [...new Set(MESSAGES.map(m => m.cat))];
  for (const cat of cats) {
    const grupo = results.filter(r => r.cat === cat);
    const ok    = grupo.filter(r => r.flag === '✅').length;
    console.log('\n📂 ' + cat.toUpperCase() + ' (' + grupo.length + ' msgs, ' + ok + ' OK)');
    for (const r of grupo) {
      const preview = r.reply ? r.reply.replace(/\n/g, ' ').substring(0, 90) : '(sin respuesta)';
      console.log('  [' + r.i + '] ' + r.flag);
      console.log('       Q: ' + r.msg.substring(0, 60));
      console.log('       A: ' + preview + (r.reply.length > 90 ? '…' : ''));
    }
  }

  const total  = results.length;
  const oks    = results.filter(r => r.flag === '✅').length;
  const warns  = results.filter(r => r.flag.includes('⚠️')).length;
  const errs   = results.filter(r => r.flag.includes('🔴')).length;
  const avgMs  = results.filter(r => r.ms > 0).length
    ? Math.round(results.filter(r => r.ms > 0).reduce((s, r) => s + r.ms, 0) / results.filter(r => r.ms > 0).length)
    : 0;

  console.log('\n' + '='.repeat(60));
  console.log('RESUMEN: ' + oks + '/' + total + ' OK | ' + warns + ' advertencias | ' + errs + ' errores');
  console.log('Tiempo promedio de respuesta: ' + avgMs + 'ms');
  console.log('='.repeat(60) + '\n');

  const fs = require('fs');
  const reportFile = 'test-report-2-' + Date.now() + '.json';
  fs.writeFileSync(reportFile, JSON.stringify({ url, date: new Date().toISOString(), results }, null, 2));
  console.log('📄 Reporte guardado en:', reportFile);
}

main().catch(console.error);

#!/usr/bin/env node
/**
 * Waikiki Bot — Test de 100 mensajes
 * Uso: node test-messages.js [url-del-bot]
 * Ejemplo: node test-messages.js https://claude-production-d7ca.up.railway.app
 */

const https = require('https');
const http  = require('http');

const BASE_URL = process.argv[2] || process.env.BOT_URL || 'http://localhost:3000';
const DELAY_MS = 800; // pausa entre mensajes para no saturar

// ── 100 MENSAJES DE PRUEBA ─────────────────────────────────────────────────
const MESSAGES = [
  // Saludo simple
  { cat: 'saludo',     msg: 'Hola' },
  { cat: 'saludo',     msg: 'Buenos días' },
  { cat: 'saludo',     msg: 'Buenas tardes, cómo están?' },
  { cat: 'saludo',     msg: 'Buen día!' },

  // Reserva — flujo natural
  { cat: 'reserva',    msg: 'Quiero hacer una reserva' },
  { cat: 'reserva',    msg: 'Necesito reservar una mesa' },
  { cat: 'reserva',    msg: 'Me gustaría reservar para este fin de semana' },
  { cat: 'reserva',    msg: 'Reserva para 2 personas el sábado a las 21hs' },
  { cat: 'reserva',    msg: 'Quiero reservar para mañana al mediodía para 3 personas' },
  { cat: 'reserva',    msg: 'Reserva para 4 personas el viernes 12 a las 21:30' },
  { cat: 'reserva',    msg: 'Necesito una mesa para el domingo a las 12' },
  { cat: 'reserva',    msg: 'Hola, somos 5 personas, hay lugar el sábado?' },
  { cat: 'reserva',    msg: 'Tenemos una reserva para esta noche, podemos cambiar el horario?' },
  { cat: 'reserva',    msg: 'Quiero cancelar mi reserva' },

  // Datos de reserva de un solo mensaje (formato directo)
  { cat: 'reserva-data', msg: 'María González\n3 personas\n21hs\n2234567890' },
  { cat: 'reserva-data', msg: 'Carlos Rodríguez\n2 pax\nviernes\n12:00\n2231234567' },
  { cat: 'reserva-data', msg: 'Laura Pérez\n4 personas\ndomingo mediodía\n1154321098' },
  { cat: 'reserva-data', msg: 'Juan Lopez 2 personas sabado noche 2235551234' },
  { cat: 'reserva-data', msg: 'Ramírez, 6 personas, sábado 21:30, 2239876543' },

  // Grupos grandes
  { cat: 'grupo-grande', msg: 'Quiero reservar para 8 personas' },
  { cat: 'grupo-grande', msg: 'Somos 10 personas, tienen lugar?' },
  { cat: 'grupo-grande', msg: 'Necesito reservar para 11 personas' },
  { cat: 'grupo-grande', msg: 'Somos 15 personas para una reunión de trabajo' },
  { cat: 'grupo-grande', msg: 'Mesa para 20 personas, es posible?' },

  // Horarios inválidos
  { cat: 'horario-invalido', msg: 'Quiero reservar para las 20hs del sábado' },
  { cat: 'horario-invalido', msg: 'Reserva para el martes a las 23hs' },
  { cat: 'horario-invalido', msg: 'Me gustaría cenar el lunes a las 21:30' },
  { cat: 'horario-invalido', msg: 'Puedo reservar el miércoles para la noche?' },

  // Información general
  { cat: 'info',       msg: 'Cuáles son los horarios?' },
  { cat: 'info',       msg: 'Dónde están ubicados?' },
  { cat: 'info',       msg: 'Cuánto sale el menú?' },
  { cat: 'info',       msg: 'Aceptan mascotas?' },
  { cat: 'info',       msg: 'Tienen estacionamiento?' },
  { cat: 'info',       msg: 'Tienen carta digital?' },
  { cat: 'info',       msg: 'Me pueden mandar el menú?' },
  { cat: 'info',       msg: 'Cuáles son los métodos de pago?' },
  { cat: 'info',       msg: 'Aceptan tarjeta de crédito?' },
  { cat: 'info',       msg: 'Tienen wifi?' },
  { cat: 'info',       msg: 'Tienen opciones sin TACC?' },
  { cat: 'info',       msg: 'Son aptos para celiacos?' },
  { cat: 'info',       msg: 'Tienen menú para niños?' },
  { cat: 'info',       msg: 'Se puede ir con chicos?' },
  { cat: 'info',       msg: 'Cuánto sale el estacionamiento?' },
  { cat: 'info',       msg: 'Hay descuentos?' },

  // Servicios específicos
  { cat: 'servicios',  msg: 'Tienen piscina?' },
  { cat: 'servicios',  msg: 'Información sobre el Hula Kai' },
  { cat: 'servicios',  msg: 'Cuánto sale el sector de pileta?' },
  { cat: 'servicios',  msg: 'Tienen carpas en la playa?' },
  { cat: 'servicios',  msg: 'Información sobre el hotel' },
  { cat: 'servicios',  msg: 'Tienen salón de eventos?' },
  { cat: 'servicios',  msg: 'Hacen cumpleaños?' },

  // Evento sushi
  { cat: 'sushi',      msg: 'Vi que hay un evento de sushi' },
  { cat: 'sushi',      msg: 'Cuánto sale la noche de sushi?' },
  { cat: 'sushi',      msg: 'Reserva para el evento del viernes 12' },
  { cat: 'sushi',      msg: 'Qué incluye el menú de sushi?' },
  { cat: 'sushi',      msg: 'Hieis x Waikiki, tienen info?' },
  { cat: 'sushi',      msg: 'Hay sushi el viernes?' },

  // Cena show
  { cat: 'show',       msg: 'Tienen cena show?' },
  { cat: 'show',       msg: 'Hay algún show este fin de semana?' },
  { cat: 'show',       msg: 'Hacen eventos con música en vivo?' },

  // Preguntas raras / fuera de contexto
  { cat: 'offtopic',   msg: 'Cuál es el mejor plato?' },
  { cat: 'offtopic',   msg: 'Tienen vista al mar?' },
  { cat: 'offtopic',   msg: 'Está buena la comida?' },
  { cat: 'offtopic',   msg: 'Cómo llego desde el centro?' },
  { cat: 'offtopic',   msg: 'Tienen delivery?' },
  { cat: 'offtopic',   msg: 'Hacen takeaway?' },
  { cat: 'offtopic',   msg: 'Cuál es el Instagram?' },
  { cat: 'offtopic',   msg: 'Tienen TripAdvisor?' },
  { cat: 'offtopic',   msg: 'Están abiertos hoy?' },
  { cat: 'offtopic',   msg: 'A qué hora cierran?' },

  // Humano
  { cat: 'humano',     msg: 'Quiero hablar con una persona' },
  { cat: 'humano',     msg: 'Me comunican con alguien?' },
  { cat: 'humano',     msg: 'Necesito hablar con el encargado' },
  { cat: 'humano',     msg: 'Hay un humano disponible?' },

  // Mensajes ambiguos / incompletos
  { cat: 'ambiguo',    msg: 'Para el sábado' },
  { cat: 'ambiguo',    msg: '2 personas' },
  { cat: 'ambiguo',    msg: '21hs' },
  { cat: 'ambiguo',    msg: 'Si' },
  { cat: 'ambiguo',    msg: 'Ok' },
  { cat: 'ambiguo',    msg: 'Gracias' },
  { cat: 'ambiguo',    msg: '???' },
  { cat: 'ambiguo',    msg: '👍' },

  // Formatos varios de teléfono/nombre
  { cat: 'formato',    msg: 'Soy Ana García, tel 223-555-1234, quiero reservar para 2' },
  { cat: 'formato',    msg: 'Pedro Martínez. 4 personas. Viernes. 21:30. 2236789012.' },
  { cat: 'formato',    msg: 'LUCAS FERNANDEZ 3 PERSONAS SABADO 12 HS' },
  { cat: 'formato',    msg: 'reserva: sofia ruiz / 2 pax / domingo / mediodia / 1167890123' },

  // Español informal / con errores
  { cat: 'informal',   msg: 'hola hay lugar para el sabado?' },
  { cat: 'informal',   msg: 'buenas! kiero reservar pa 4 el finde' },
  { cat: 'informal',   msg: 'hola q tal? se puede cenar ahi el martes?' },
  { cat: 'informal',   msg: 'buen dia tengo una consulta sobre la pileta' },
  { cat: 'informal',   msg: 'hay lugar hoy?' },
  { cat: 'informal',   msg: 'cuanto sale x persona?' },

  // Multi-línea / datos mezclados
  { cat: 'multilinea', msg: 'Hola\nQuiero reservar\nSomos 4 personas\nEl viernes' },
  { cat: 'multilinea', msg: 'Reserva\nNombre: Roberto Silva\nPersonas: 6\nFecha: 14/06\nHorario: 21hs\nTel: 2238765432' },
  { cat: 'multilinea', msg: 'Quería consultar\ntienen lugar para mañana?\npara 2 personas al mediodía' },

  // Consultas sobre reservas existentes
  { cat: 'consulta-reserva', msg: 'Hice una reserva, puedo confirmar que está?' },
  { cat: 'consulta-reserva', msg: 'Reservé para el sábado, me pueden confirmar?' },
  { cat: 'consulta-reserva', msg: 'Cuánto tiempo antes tengo que llegar?' },
  { cat: 'consulta-reserva', msg: 'Si llegamos tarde nos guardan la mesa?' },

  // Accesibilidad / necesidades especiales
  { cat: 'especial',   msg: 'Tienen acceso para silla de ruedas?' },
  { cat: 'especial',   msg: 'Algún integrante tiene alergia al mariscos, es posible?' },
  { cat: 'especial',   msg: 'Necesitamos silla para bebé' },

  // Test límites
  { cat: 'limite',     msg: 'a' },
  { cat: 'limite',     msg: 'Quiero reservar para el 31 de febrero a las 25hs para 0 personas' },
  { cat: 'limite',     msg: 'Reserva para 1 persona (para mi solo)' },
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
      timeout:  30000,
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
  console.log('\n🌊 WAIKIKI BOT — TEST DE MENSAJES');
  console.log('='.repeat(60));
  console.log('URL:', url);
  console.log('Total mensajes:', MESSAGES.length);
  console.log('Demora entre mensajes:', DELAY_MS + 'ms');
  console.log('='.repeat(60) + '\n');

  const results = [];
  const errors  = [];

  for (let i = 0; i < MESSAGES.length; i++) {
    const { cat, msg } = MESSAGES[i];
    const userId = 'test_' + cat + '_' + i;
    process.stdout.write(`[${String(i+1).padStart(3)}/${MESSAGES.length}] ${cat.padEnd(16)} | ${msg.substring(0,40).padEnd(42)} → `);

    try {
      const t0  = Date.now();
      const res = await post(url, { id: userId, last_input_text: msg, whatsapp_phone: '5492235550000' });
      const ms  = Date.now() - t0;
      const reply = res.body?.response || '';

      const hasReserva = reply.includes('##RESERVA##') || reply.length === 0 && msg.match(/\d{10}/);
      const hasHumano  = reply.includes('##HUMANO##');
      const flag = res.status !== 200 ? '🔴 HTTP ' + res.status
                 : !reply             ? '⚠️  VACÍO'
                 : reply.length > 800  ? '⚠️  LARGO'
                 : '✅';

      console.log(flag + ' (' + ms + 'ms, ' + reply.length + ' chars)');
      results.push({ i: i+1, cat, msg, reply, ms, status: res.status, flag });
    } catch (err) {
      console.log('🔴 ERROR: ' + err.message);
      errors.push({ i: i+1, cat, msg, error: err.message });
      results.push({ i: i+1, cat, msg, reply: '', ms: 0, status: 0, flag: '🔴' });
    }

    if (i < MESSAGES.length - 1) await delay(DELAY_MS);
  }

  // ── REPORTE ──
  console.log('\n' + '='.repeat(60));
  console.log('REPORTE FINAL');
  console.log('='.repeat(60));

  const cats = [...new Set(MESSAGES.map(m => m.cat))];
  for (const cat of cats) {
    const grupo = results.filter(r => r.cat === cat);
    const ok    = grupo.filter(r => r.flag === '✅').length;
    console.log('\n📂 ' + cat.toUpperCase() + ' (' + grupo.length + ' mensajes, ' + ok + ' OK)');
    for (const r of grupo) {
      const preview = r.reply ? r.reply.replace(/\n/g, ' ').substring(0, 80) : '(sin respuesta)';
      console.log('  [' + r.i + '] ' + r.flag + ' | Q: ' + r.msg.substring(0,35) + '…');
      console.log('       A: ' + preview + (r.reply.length > 80 ? '…' : ''));
    }
  }

  const total  = results.length;
  const oks    = results.filter(r => r.flag === '✅').length;
  const warns  = results.filter(r => r.flag.includes('⚠️')).length;
  const errs   = results.filter(r => r.flag.includes('🔴')).length;
  const avgMs  = Math.round(results.filter(r => r.ms > 0).reduce((s, r) => s + r.ms, 0) / total);

  console.log('\n' + '='.repeat(60));
  console.log('RESUMEN: ' + oks + '/' + total + ' OK | ' + warns + ' advertencias | ' + errs + ' errores');
  console.log('Tiempo promedio de respuesta: ' + avgMs + 'ms');
  console.log('='.repeat(60) + '\n');

  // Guardar reporte completo en JSON
  const fs = require('fs');
  const reportFile = 'test-report-' + Date.now() + '.json';
  fs.writeFileSync(reportFile, JSON.stringify({ url, date: new Date().toISOString(), results }, null, 2));
  console.log('📄 Reporte completo guardado en:', reportFile);
}

main().catch(console.error);

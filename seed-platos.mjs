import { createClient } from '@supabase/supabase-js'
import { randomUUID } from 'crypto'

const supabase = createClient(
  'https://ghgulqipjlahzytvnjko.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdoZ3VscWlwamxhaHp5dHZuamtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2NDAxODEsImV4cCI6MjA5NzIxNjE4MX0.CUvONXr4XygKyhxXNgDKIXjGCZLXtLFWXX5sogKoMkA'
)

// Primero verificar que los platos existan en la DB
const { data: platos, error: platosError } = await supabase.from('platos').select('id, nombre')
if (platosError) { console.error('Error leyendo platos:', platosError); process.exit(1) }
console.log(`Platos en DB: ${platos.length}`)

// Verificar que los ingredientes clave existen
const { data: ings } = await supabase.from('ingredientes').select('id, nombre')
const ingMap = Object.fromEntries((ings || []).map(i => [i.id, i.nombre]))
console.log(`Ingredientes en DB: ${(ings||[]).length}`)

// Items a cargar — precio_base = 0 porque aún no hay precios cargados
// Cuando se carguen precios en la app, se actualizarán automáticamente
const items = [
  // Papas a la crema (e-2)
  { plato_id: 'e-2', nombre: 'Papa', ingrediente_id: 'v-e-5', cantidad: 550, unidad: 'gramos', precio_base: 0, merma: 10, costo_calculado: 0 },

  // Tortilla española (e-3)
  { plato_id: 'e-3', nombre: 'Huevo', ingrediente_id: null, cantidad: 5, unidad: 'unidad', precio_base: 0, merma: 0, costo_calculado: 0 },
  { plato_id: 'e-3', nombre: 'Chorizo colorado', ingrediente_id: null, cantidad: 75, unidad: 'gramos', precio_base: 0, merma: 0, costo_calculado: 0 },
  { plato_id: 'e-3', nombre: 'Cebolla y morrón', ingrediente_id: null, cantidad: 90, unidad: 'gramos', precio_base: 0, merma: 15, costo_calculado: 0 },
  { plato_id: 'e-3', nombre: 'Ajo', ingrediente_id: 'v-v-23', cantidad: 5, unidad: 'gramos', precio_base: 0, merma: 10, costo_calculado: 0 },
  { plato_id: 'e-3', nombre: 'Papa', ingrediente_id: 'v-e-5', cantidad: 250, unidad: 'gramos', precio_base: 0, merma: 10, costo_calculado: 0 },

  // Langostinos empanados (e-4)
  { plato_id: 'e-4', nombre: 'Langostino (unid)', ingrediente_id: null, cantidad: 10, unidad: 'unidad', precio_base: 0, merma: 0, costo_calculado: 0 },
  { plato_id: 'e-4', nombre: 'Papa', ingrediente_id: 'v-e-5', cantidad: 180, unidad: 'gramos', precio_base: 0, merma: 10, costo_calculado: 0 },
  { plato_id: 'e-4', nombre: 'Lechuga', ingrediente_id: 'v-v-6', cantidad: 1, unidad: 'unidad', precio_base: 0, merma: 0, costo_calculado: 0 },

  // Gambas al ajillo (e-6)
  { plato_id: 'e-6', nombre: 'Gambas', ingrediente_id: null, cantidad: 300, unidad: 'gramos', precio_base: 0, merma: 5, costo_calculado: 0 },
  { plato_id: 'e-6', nombre: 'Papa', ingrediente_id: 'v-e-5', cantidad: 140, unidad: 'gramos', precio_base: 0, merma: 10, costo_calculado: 0 },
  { plato_id: 'e-6', nombre: 'Ajo', ingrediente_id: 'v-v-23', cantidad: 25, unidad: 'gramos', precio_base: 0, merma: 10, costo_calculado: 0 },
  { plato_id: 'e-6', nombre: 'Vino blanco', ingrediente_id: null, cantidad: 50, unidad: 'ml', precio_base: 0, merma: 0, costo_calculado: 0 },
  { plato_id: 'e-6', nombre: 'Pomodoro', ingrediente_id: null, cantidad: 50, unidad: 'gramos', precio_base: 0, merma: 0, costo_calculado: 0 },

  // Rabas con limón (e-1)
  { plato_id: 'e-1', nombre: 'Calamar descongelado', ingrediente_id: null, cantidad: 300, unidad: 'gramos', precio_base: 0, merma: 5, costo_calculado: 0 },

  // Calamarettes a la leonesa (e-9)
  { plato_id: 'e-9', nombre: 'Papa noisette', ingrediente_id: 'v-e-5', cantidad: 60, unidad: 'gramos', precio_base: 0, merma: 10, costo_calculado: 0 },
  { plato_id: 'e-9', nombre: 'Cebolla', ingrediente_id: 'v-e-3', cantidad: 100, unidad: 'gramos', precio_base: 0, merma: 15, costo_calculado: 0 },
  { plato_id: 'e-9', nombre: 'Calamarettes', ingrediente_id: null, cantidad: 225, unidad: 'gramos', precio_base: 0, merma: 5, costo_calculado: 0 },
  { plato_id: 'e-9', nombre: 'Papa española', ingrediente_id: 'v-e-5', cantidad: 70, unidad: 'gramos', precio_base: 0, merma: 10, costo_calculado: 0 },

  // Bife de chorizo al malbec (ca-2) — guarnición
  { plato_id: 'ca-2', nombre: 'Papa española', ingrediente_id: 'v-e-5', cantidad: 160, unidad: 'gramos', precio_base: 0, merma: 10, costo_calculado: 0 },

  // Bife de chorizo a la pimienta (ca-4) — guarnición
  { plato_id: 'ca-4', nombre: 'Papines', ingrediente_id: 'v-v-16', cantidad: 300, unidad: 'gramos', precio_base: 0, merma: 5, costo_calculado: 0 },
]

// Agrupar por plato para borrar y reinsertar
const platoIds = [...new Set(items.map(i => i.plato_id))]

for (const platoId of platoIds) {
  // Borrar items existentes
  await supabase.from('items_plato').delete().eq('plato_id', platoId)

  // Insertar nuevos
  const platoItems = items.filter(i => i.plato_id === platoId).map(i => ({
    ...i,
    id: randomUUID(),
  }))

  const { error } = await supabase.from('items_plato').insert(platoItems)
  if (error) {
    console.error(`Error en plato ${platoId}:`, error.message)
  } else {
    const nombrePlato = platos.find(p => p.id === platoId)?.nombre ?? platoId
    console.log(`✓ ${nombrePlato} — ${platoItems.length} ingredientes`)
  }
}

console.log('\nListo!')

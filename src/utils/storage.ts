import { Ingrediente, Proveedor, Plato } from '../types'
import { initialIngredientes, initialPlatos, initialProveedores } from '../data/initialData'

const KEYS = {
  proveedores: 'waikicosts_proveedores',
  ingredientes: 'waikicosts_ingredientes',
  platos: 'waikicosts_platos',
}

function getOrInit<T>(key: string, initial: T): T {
  const stored = localStorage.getItem(key)
  if (stored) return JSON.parse(stored)
  localStorage.setItem(key, JSON.stringify(initial))
  return initial
}

export const storage = {
  getProveedores: (): Proveedor[] => getOrInit(KEYS.proveedores, initialProveedores),
  setProveedores: (v: Proveedor[]) => localStorage.setItem(KEYS.proveedores, JSON.stringify(v)),
  getIngredientes: (): Ingrediente[] => {
    const ings = getOrInit(KEYS.ingredientes, initialIngredientes)
    // Migración: agregar nuevos ingredientes y mermaPorDefecto a los existentes
    const defaultById = Object.fromEntries(initialIngredientes.map(i => [i.id, i]))
    const migratedIds = new Set(ings.map((i: Ingrediente) => i.id))
    const newOnes = initialIngredientes.filter(i => !migratedIds.has(i.id))
    const migrated = [
      ...ings.map((i: Ingrediente) => ({
        ...i,
        mermaPorDefecto: i.mermaPorDefecto ?? defaultById[i.id]?.mermaPorDefecto ?? 0,
      })),
      ...newOnes,
    ]
    if (newOnes.length > 0) localStorage.setItem(KEYS.ingredientes, JSON.stringify(migrated))
    return migrated
  },
  setIngredientes: (v: Ingrediente[]) => localStorage.setItem(KEYS.ingredientes, JSON.stringify(v)),
  getPlatos: (): Plato[] => getOrInit(KEYS.platos, initialPlatos),
  setPlatos: (v: Plato[]) => localStorage.setItem(KEYS.platos, JSON.stringify(v)),
}

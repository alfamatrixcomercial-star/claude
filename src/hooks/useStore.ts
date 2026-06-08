import { useState, useCallback } from 'react'
import { Ingrediente, Plato, Proveedor } from '../types'
import { storage } from '../utils/storage'
import { calcularCosto } from '../utils/format'

export function useStore() {
  const [proveedores, setProveedoresState] = useState<Proveedor[]>(() => storage.getProveedores())
  const [ingredientes, setIngredientesState] = useState<Ingrediente[]>(() => storage.getIngredientes())
  const [platos, setPlatosState] = useState<Plato[]>(() => storage.getPlatos())

  const setProveedores = useCallback((v: Proveedor[]) => {
    setProveedoresState(v)
    storage.setProveedores(v)
  }, [])

  const setIngredientes = useCallback((v: Ingrediente[]) => {
    setIngredientesState(v)
    storage.setIngredientes(v)
  }, [])

  const setPlatos = useCallback((v: Plato[]) => {
    setPlatosState(v)
    storage.setPlatos(v)
  }, [])

  const actualizarPrecioIngrediente = useCallback((ingredienteId: string, nuevoPrecio: number) => {
    setIngredientesState(prev => {
      const updated = prev.map(ing =>
        ing.id === ingredienteId
          ? { ...ing, precio: nuevoPrecio, updatedAt: new Date().toISOString() }
          : ing
      )
      storage.setIngredientes(updated)
      return updated
    })
    setPlatosState(prev => {
      const updated = prev.map(plato => ({
        ...plato,
        items: plato.items.map(item => {
          if (item.ingredienteId !== ingredienteId) return item
          return {
            ...item,
            precioBase: nuevoPrecio,
            costoCalculado: calcularCosto(nuevoPrecio, item.cantidad, item.unidad, item.merma),
          }
        }),
      }))
      storage.setPlatos(updated)
      return updated
    })
  }, [])

  return {
    proveedores, setProveedores,
    ingredientes, setIngredientes,
    platos, setPlatos,
    actualizarPrecioIngrediente,
  }
}

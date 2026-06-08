import { useState } from 'react'
import Navbar from './components/Navbar'
import ProveedoresModule from './components/proveedores/ProveedoresModule'
import PlatosModule from './components/platos/PlatosModule'
import ResumenModule from './components/resumen/ResumenModule'
import { useStore } from './hooks/useStore'
import { Ingrediente, Plato } from './types'

type Tab = 'proveedores' | 'platos' | 'resumen'

export default function App() {
  const [tab, setTab] = useState<Tab>('proveedores')
  const { proveedores, setProveedores, ingredientes, setIngredientes, platos, setPlatos, actualizarPrecioIngrediente } = useStore()

  function handleAddProveedor(nombre: string) {
    const id = nombre.toLowerCase().replace(/\s+/g, '-') + '-' + Date.now()
    setProveedores([...proveedores, { id, nombre }])
  }

  function handleAddIngrediente(ing: Omit<Ingrediente, 'id' | 'precio' | 'updatedAt'>) {
    const newIng: Ingrediente = {
      ...ing,
      id: 'custom-' + Date.now(),
      precio: null,
      updatedAt: null,
    }
    setIngredientes([...ingredientes, newIng])
  }

  function handleDeleteIngrediente(id: string) {
    setIngredientes(ingredientes.filter(i => i.id !== id))
    setPlatos(platos.map(p => ({
      ...p,
      items: p.items.filter(item => item.ingredienteId !== id),
    })))
  }

  function handleUpdatePlato(plato: Plato) {
    setPlatos(platos.map(p => p.id === plato.id ? plato : p))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activeTab={tab} onTabChange={setTab} />
      {tab === 'proveedores' && (
        <ProveedoresModule
          proveedores={proveedores}
          ingredientes={ingredientes}
          onAddProveedor={handleAddProveedor}
          onUpdatePrecio={actualizarPrecioIngrediente}
          onAddIngrediente={handleAddIngrediente}
          onDeleteIngrediente={handleDeleteIngrediente}
        />
      )}
      {tab === 'platos' && (
        <PlatosModule
          platos={platos}
          ingredientes={ingredientes}
          onUpdatePlato={handleUpdatePlato}
        />
      )}
      {tab === 'resumen' && (
        <ResumenModule platos={platos} />
      )}
    </div>
  )
}

import { useState } from 'react'
import ModalBottomLeft from './components/ModalbottomLeft'
import ModalBottomRight from './components/ModalBottomRight'
import ModalTopLeft from './components/ModalTopLeft'
import ModalTopRight from './components/ModalTopRight'

export default function App() {
  const [open, setOpen] = useState(null)

  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col gap-4 items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Modales Circulares 🚀</h1>
      <div className="flex flex-wrap gap-4">
        <button onClick={() => setOpen('bl')} className="btn">⬅️ Abajo Izq</button>
        <button onClick={() => setOpen('br')} className="btn">Abajo Der ➡️</button>
        <button onClick={() => setOpen('tl')} className="btn">⬅️ Arriba Izq</button>
        <button onClick={() => setOpen('tr')} className="btn">Arriba Der ➡️</button>
      </div>

      <ModalBottomLeft visible={open === 'bl'} onClose={() => setOpen(null)} />
      <ModalBottomRight visible={open === 'br'} onClose={() => setOpen(null)} />
      <ModalTopLeft visible={open === 'tl'} onClose={() => setOpen(null)} />
      <ModalTopRight visible={open === 'tr'} onClose={() => setOpen(null)} />
    </div>
  )
}

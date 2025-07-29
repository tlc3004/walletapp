import { useState } from 'react'
import ModalBottomLeft from './components/ModalbottomLeft'
import ModalBottomRight from './components/ModalBottomRight'
import ModalTopLeft from './components/ModalTopLeft'
import ModalTopRight from './components/ModalTopRight'

export default function App() {
  const [showBL, setShowBL] = useState(false)
  const [showBR, setShowBR] = useState(false)
  const [showTL, setShowTL] = useState(false)
  const [showTR, setShowTR] = useState(false)

  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col gap-4 items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Modales Circulares 🚀</h1>

      <div className="flex flex-wrap gap-4">
        <button onClick={() => setShowBL(true)} className="btn">⬅️ Abajo Izq</button>
        <button onClick={() => setShowBR(true)} className="btn">Abajo Der ➡️</button>
        <button onClick={() => setShowTL(true)} className="btn">⬅️ Arriba Izq</button>
        <button onClick={() => setShowTR(true)} className="btn">Arriba Der ➡️</button>
      </div>

      <ModalBottomLeft visible={showBL} onClose={() => setShowBL(false)} />
      <ModalBottomRight visible={showBR} onClose={() => setShowBR(false)} />
      <ModalTopLeft visible={showTL} onClose={() => setShowTL(false)} />
      <ModalTopRight visible={showTR} onClose={() => setShowTR(false)} />
    </div>
  )
}

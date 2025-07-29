import { useState } from 'react'
import ModalBottomLeft from './components/ModalbottomLeft'
import ModalBottomRight from './components/ModalBottomRight'
import ModalTopLeft from './components/ModalTopLeft'
import ModalTopRight from './components/ModalTopRight'
import './App.css'

export default function App({onClose}) {
  const [showBL, setShowBL] = useState(false)
  const [showBR, setShowBR] = useState(false)
  const [showTL, setShowTL] = useState(false)
  const [showTR, setShowTR] = useState(false)

  return (
    <div className="app">
      <h1>Modales Circulares 🚀</h1>

      <div className="botonera">
        <button onClick={() => setShowBL(true)}>⬅️ Azul</button>
        <button onClick={() => setShowBR(true)}>Lila ➡️</button>
        <button onClick={() => setShowTL(true)}>⬅️ Verde</button>
        <button onClick={() => setShowTR(true)}>Rojo ➡️</button>
      </div>

      <ModalBottomLeft visible={showBL} onClose={() => setShowBL(onClose)} />
      <ModalBottomRight visible={showBR} onClose={() => setShowBR(onClose)} />
      <ModalTopLeft visible={showTL} onClose={() => setShowTL(onClose)} />
      <ModalTopRight visible={showTR} onClose={() => setShowTR(onClose)} />
    </div>
  )
}

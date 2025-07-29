import { useState } from 'react'
import ModalBottomLeft from './components/ModalbottomLeft'
import ModalBottomRight from './components/ModalBottomRight'
import Productos from './pages/Productos'
import './App.css'

export default function App() {
  const [showBL, setShowBL] = useState(false)
  const [showBR, setShowBR] = useState(false)
  const [showProductos, setShowProductos] = useState(false)

  const handleOpenProducto = () => {
    setShowBR(true)
    setShowProductos(true)
  }

  const handleCloseBR = () => {
    setShowBR(false)
    setShowProductos(false)
  }

  return (
    <div className="app">
      <div className="botonera">
        <button onClick={() => setShowBL(true)}>Azul ➡️</button>
        <button onClick={handleOpenProducto}>⬅️ Lila + Producto</button>
      </div>

      <ModalBottomLeft visible={showBL} onClose={() => setShowBL(false)} />

      <ModalBottomRight visible={showBR} onClose={handleCloseBR}>
        {showProductos && <Productos onClose={handleCloseBR} />}
      </ModalBottomRight>
    </div>
  )
}

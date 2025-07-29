export default function ModalBottomRight({ visible, onClose, children }) {
  return (
    <div
      className={`modal bottom-right ${visible ? 'show' : ''}`}
      onClick={onClose}
    >
      <div className="circle-content" onClick={(e) => e.stopPropagation()}>
        💬 Abajo Derecha
        <button onClick={onClose} style={{ marginBottom: '50%' }}>❌</button>

        {/* 👇 Aquí mostramos el contenido dinámico */}
        {children}
      </div>
    </div>
  )
}

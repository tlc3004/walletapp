export default function ModalBottomLeft({ visible, onClose }) {
  return (
    <div className={`modal bottom-left ${visible ? 'show' : ''}`} onClick={onClose}>
      <div className="circle-content" onClick={(e) => e.stopPropagation()}>
        👋 Abajo Izquierda <button onClick={onClose}>❌</button>
      </div>
    </div>
  )
}

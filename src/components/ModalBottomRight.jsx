export default function ModalBottomRight({ visible, onClose }) {
  return (
    <div className={`modal bottom-right ${visible ? 'show' : ''}`} onClick={onClose}>
      <div className="circle-content" onClick={(e) => e.stopPropagation()}>
        💬 Abajo Derecha <button onClick={onClose}>❌</button>
      </div>
    </div>
  )
}

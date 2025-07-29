export default function ModalTopRight({ visible, onClose }) {
  return (
    <div className={`modal top-right ${visible ? 'show' : ''}`} onClick={onClose}>
      <div className="circle-content" onClick={(e) => e.stopPropagation()}>
        📍 Arriba Derecha <button onClick={onClose}>❌</button>
      </div>
    </div>
  )
}

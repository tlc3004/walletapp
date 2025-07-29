export default function ModalTopLeft({ visible, onClose }) {
  return (
    <div className={`modal top-left ${visible ? 'show' : ''}`} onClick={onClose}>
      <div className="circle-content" onClick={(e) => e.stopPropagation()}>
        ☀️ Arriba Izquierda <button onClick={onClose}>❌</button>
      </div>
    </div>
  )
}

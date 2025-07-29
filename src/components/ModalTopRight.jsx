export default function ModalTopRight({ visible, onClose }) {
  return (
    <div className={`modal top-right ${visible ? 'show' : ''}`} onClick={onClose}>
      <div className="circle-content" onClick={(e) => e.stopPropagation()}>
        📍 Arriba Derecha <button onClick={onClose}style={{marginBottom:"90%", color:"#000"}}>❌</button>
      </div>
    </div>
  )
}

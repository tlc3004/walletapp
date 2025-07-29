export default function ModalTopRight({ visible, onClose }) {
  return (
    <div className="fixed top-0 left-0 w-[400px] h-[400px] z-50 pointer-events-auto">
      <div
        className={`
          w-full h-full bg-gradient-to-bl from-rose-500 to-red-800 
          rounded-br-full transition-transform duration-700 ease-in-out 
          transform origin-top-left
          ${visible ? 'rotate-90' : 'rotate-0'}
          flex items-start justify-end pointer-events-auto shadow-xl p-4 text-white
        `}
        onClick={onClose}
      >
        📍 Desde arriba a la derecha
      </div>
    </div>
  )
}

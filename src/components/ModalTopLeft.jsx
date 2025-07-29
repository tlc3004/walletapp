export default function ModalTopLeft({ visible, onClose }) {
  return (
    <div className="fixed top-0 left-0 w-[300px] h-[300px] z-50 pointer-events-none">
      <div
        className={`w-full h-full bg-gradient-to-br from-emerald-500 to-teal-800 
          rounded-bl-full transition-transform duration-700 ease-in-out 
          transform origin-top-left
          ${visible ? 'rotate-0' : '-rotate-90'}
          flex items-start justify-start pointer-events-auto shadow-xl p-4 text-white`}
        onClick={onClose}
      >
        ☀️ Desde arriba a la izquierda
      </div>
    </div>
  )
}

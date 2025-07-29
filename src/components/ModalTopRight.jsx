export default function ModalTopRight({ visible, onClose }) {
  return (
    <div className="fixed top-0 right-0 w-[300px] h-[300px] z-50 pointer-events-none">
      <div
        className={`w-full h-full bg-gradient-to-bl from-rose-500 to-red-800 
          rounded-br-full transition-transform duration-700 ease-in-out 
          transform origin-top-right
          ${visible ? 'rotate-0' : '-rotate-90'}
          flex items-start justify-end pointer-events-auto shadow-xl p-4 text-white`}
        onClick={onClose}
      >
        📍 Desde arriba a la derecha
      </div>
    </div>
  )
}

export default function ModalBottomRight({ visible, onClose }) {
  return (
    <div className="fixed bottom-0 left-0 w-[400px] h-[400px] z-50 pointer-events-auto">
      <div
        className={`
          w-full h-full bg-gradient-to-tl from-purple-500 to-pink-700 
          rounded-tr-full transition-transform duration-700 ease-in-out 
          transform origin-bottom-left
          ${visible ? '-rotate-90' : 'rotate-0'}
          flex items-end justify-end pointer-events-auto shadow-xl p-4 text-white
        `}
        onClick={onClose}
      >
        💬 Desde abajo a la derecha
      </div>
    </div>
  )
}

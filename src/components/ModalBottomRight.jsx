export default function ModalBottomRight({ visible, onClose }) {
  return (
    <div className="fixed bottom-0 right-0 w-[300px] h-[300px] z-50 pointer-events-none">
      <div
        className={`w-full h-full bg-gradient-to-tl from-purple-500 to-pink-700 
          rounded-tr-full transition-transform duration-700 ease-in-out 
          transform origin-bottom-right
          ${visible ? 'rotate-0' : 'rotate-90'}
          flex items-end justify-end pointer-events-auto shadow-xl p-4 text-white`}
        onClick={onClose}
      >
        💬 Desde abajo a la derecha
      </div>
    </div>
  )
}

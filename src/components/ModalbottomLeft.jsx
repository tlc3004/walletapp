export default function ModalBottomLeft({ visible, onClose }) {
  return (
    <div className="fixed bottom-0 right-0 w-[400px] h-[400px] z-50 pointer-events-auto">
      <div
        className={`
          w-full h-full bg-gradient-to-tr from-indigo-500 to-blue-800 
          rounded-tl-full transition-transform duration-700 ease-in-out 
          transform origin-bottom-right
          ${visible ? 'rotate-90' : 'rotate-0'}
          flex items-end justify-start pointer-events-auto shadow-xl p-4 text-white
        `}
        onClick={onClose}
      >
        👋 ¡Hola desde abajo a la izquierda!
      </div>
    </div>
  )
}

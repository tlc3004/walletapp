export default function Productos({ onClose }) {
  return (
    <div className="product">
      <div className="content-product">
        <h1 className="titulo">Producto</h1>
        <img src="/imagenes/dibujo.png" alt="dibujo" />
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  )
}

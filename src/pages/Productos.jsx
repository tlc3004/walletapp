export default function Productos({ onClose }) {
  return (
    <div className="product">
      <div className="content-product">
        <h1 className="titulo">Producto</h1>
        <img src="/imagenes/donuts.png" alt="dibujo" style={{width:"100vw"}} />
        <button onClick={onClose}>x</button>
      </div>
    </div>
  )
}

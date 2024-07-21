import { useContext } from "react"
import Button from "./Button"
import { miContexto } from "./CartProvider"

function Producto({ producto }) {

  const valorDelContexto = useContext(miContexto)

  //console.log(producto)

  const handleClick = () => {
    valorDelContexto.fn()
  }

  return (
    <article className="p-4 text-black transition-all bg-white rounded-md shadow-xl hover:scale-105">
      <img src={producto.image} alt={producto.title} className="object-contain aspect-square" />
      <h2 className="font-bold truncate">{producto.title}</h2>
      <p className="text-gray-400">${producto.price}</p>
      <button onClick={handleClick}>agregar al carrito</button>
      <Button type="link" href="/detalle">
        ver detalle {valorDelContexto.cant}
      </Button>
    </article>
  )
}
export default Producto
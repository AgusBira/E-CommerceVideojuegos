import { useContext, useEffect, useState } from "react"
import { buscarProducto } from "./async"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"
import { cartContext, CartProvider } from "../context/CartContext"
import { getProducts } from "../firebase/firebase"
export default function ItemDetailContainer() {
  const [cart, setCart, addItem] = useContext(cartContext)
  let [stock, setStock] = useState(5)
  let [count, setCount] = useState(0)
  let { id } = useParams()
  let [product, setProduct] = useState({})
  useEffect(() => {
    getProducts().then((products) => setProduct(buscarProducto(id, products)))
  }, [id])

  const handleClick = () => {
    addItem(product, count)
  }

  function increment() {
    if (count < 5) {
      setCount(prevCount => prevCount + 1)
      setStock(prevStock => prevStock - 1)
    }

  }
  function decrement() {
    if (count > 0) {
      setCount(prevCount => prevCount - 1)
      setStock(prevStock => prevStock + 1)
    }
  }
  return (
    <>
      <article className="productDetail">
        <div className="portadaJuego">
          <h2>{product?.nombre}</h2>
          <img src={product?.rutaimg} alt="" />
        </div>
        <div className="infoProducto">
          <p>{product?.console} || {product?.categoria}</p>
          <p>Stock disponible: {stock}</p>
          <h3>${product?.precio}</h3>
          <div className="ItemCounter">
            <button onClick={decrement}>-</button>
            <input type="text" value={count} />
            <button onClick={increment}>+</button>
          </div>
          <div className="agregarAlCarrito">
            <button onClick={handleClick}>Agregar al Carrito</button>
          </div>
        </div>


      </article>
    </>
  )
}


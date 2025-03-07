import { useContext, useEffect, useState } from "react"
import { buscarProducto } from "./async"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"
import { cartContext, CartProvider } from "../context/CartContext"
import { getProducts } from "../firebase/firebase"
export default function ItemDetailContainer() {
  const [cart, setCart, addItem] = useContext(cartContext)
  let [loading, setLoading] = useState(true)
  let [count, setCount] = useState(0)
  let { id } = useParams()
  let [product, setProduct] = useState({})
  useEffect(() => {
    getProducts().then((products) => {
      setProduct(buscarProducto(id, products))
      setLoading(false)
    })
  }, [id])

  const handleClick = () => {
    addItem(product, count)
  }

  function increment() {
    if (product.stock) {
      setCount(prevCount => prevCount + 1)
      product.stock--
    }

  }
  function decrement() {
    if (count > 0) {
      setCount(prevCount => prevCount - 1)
      product.stock++
    }
  }
  return (
    <>
      {loading ? <h2>Cargando...</h2> : 
      <article className="productDetail">
        <div className="portadaJuego">
          <h2>{product?.nombre}</h2>
          <img src={product?.rutaimg} alt="" />
        </div>
        <div className="infoProducto">
          <p>{product?.console} || {product?.categoria}</p>
          <p>Stock disponible: {product.stock}</p>
          <h3>${product?.precio}</h3>
          <div className="ItemCounter">
            <button onClick={decrement}>-</button>
            <input type="text" value={count} />
            <button onClick={increment}>+</button>
          </div>
          {cart.includes(product) ? <p>Se agrego al carrito!</p>: 
          <div className="agregarAlCarrito">
            <button onClick={handleClick}>Agregar al Carrito</button>
          </div>}
          
        </div>
      </article>}

    </>
  )
}


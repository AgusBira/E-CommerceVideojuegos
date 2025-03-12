import { useContext, useEffect, useState } from "react"
import { buscarProducto } from "./async"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"
import { cartContext, CartProvider } from "../context/CartContext"
import { getProducts } from "../firebase/firebase"
import { Spinner } from 'reactstrap';
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
      {loading ?  <Spinner color="light" className="spinner" ></Spinner> : 
      <article className="productDetail">
        <div className="portadaJuego">
          <img src={product?.rutaimg} alt="" />
        </div>
        <div className="infoProducto">
        <h2>{product?.nombre}</h2>
          <p>{product?.console}</p>
          <p>Stock disponible: {product.stock}</p>
          <h3>${product?.precio}</h3>
          <div className="ItemCounter">
            <button onClick={decrement}>-</button>
            <input type="text" value={count} />
            <button onClick={increment}>+</button>
          </div>

          {count >= 1 ?<div className="agregarAlCarrito">
            <button onClick={handleClick}>Agregar al Carrito</button>
          </div>: <p>Indique la cantidad</p>
          }
        </div>
      </article>}

    </>
  )
}


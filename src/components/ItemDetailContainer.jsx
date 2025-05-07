import { useContext, useEffect, useState } from "react"
import { buscarProducto } from "./async"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"
import { cartContext, CartProvider } from "../context/CartContext"
import { getProducts } from "../firebase/firebase"
import { Spinner } from 'reactstrap';
import { Link } from "react-router-dom"
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
    <section className="containerProductDetail">
      <Link to="/"><img className="imagenflecha" src="/flecha-hacia-la-izquierda.png" alt="" /></Link>
      {loading ?  <Spinner color="black" className="spinner" ></Spinner> : 
      <article className="productDetail">
        <div className="portadaJuego">
          <img src={product?.rutaimg} alt="" />
        </div>
        <div className="infoProducto">
          <div >
          <h2>{product?.nombre}</h2>
            <div className="infoProducto-consolastock">
              <p className="console">{product?.console}</p>
              <p className="stock">Stock disponible: {product.stock}</p>
            </div>
          </div>
          <p className="infoproducto-description">{product.description}</p>
          <h3>${product?.precio}</h3>
          <div className="ItemCounter">
            <button onClick={decrement}>-</button>
            <input type="text" value={count} readonly/>
            <button onClick={increment}>+</button>
          </div>

          {count >= 1 ?<div className="agregarAlCarrito">
            <button onClick={handleClick}>Agregar al Carrito</button>
          </div>: <p className="indique">Indique la cantidad</p>
          }
        </div>
      </article>}

    </section>
  )
}


import { useContext, useEffect, useState } from "react"
import { buscarProducto } from "./async"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"
import { cartContext, CartProvider } from "../context/CartContext"
import { getProducts } from "../firebase/firebase"
export default function ItemDetailContainer() {
  const [cart, setCart, addItem] = useContext(cartContext)
  let { id } = useParams()
  let [product, setProduct] = useState({})
  useEffect(() => {
    getProducts().then((products) => setProduct(buscarProducto(id,products)))
  }, [id])

  const handleClick = () =>{
    if(product.stock === 0){
      console.log("sin stock")
    }else{
      addItem(product)
      product.stock--
      console.log(cart)
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
          <p>Stock disponible: {product?.stock}</p>
          <h3>${product?.precio}</h3>
          <div className="agregarAlCarrito">
            <button>+</button>
            <input type="text" name="" id="" />
            <button>-</button>
            <button onClick={handleClick}>Agregar al Carrito</button>
          </div>
        </div>


      </article>
    </>
  )
}


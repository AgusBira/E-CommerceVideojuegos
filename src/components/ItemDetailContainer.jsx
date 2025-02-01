import { useEffect, useState } from "react"
import {buscarProducto} from "./async"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"
import ButtonComponent from "./ButtonComponent"
export default function ProductDetail() {
  let {id} = useParams()
  let [product, setProduct] = useState({})

  useEffect(() => {
    const result = buscarProducto(Number(id))
    setProduct(result) 
  },[id])
  return (
    <>
    <article className="productDetail">
        
        <h2>{product?.nombre}</h2>
        <img src={product?.rutaimg} alt="" />
        <p>{product?.console} || {product?.categoria}</p>
        <p>Stock disponible: {product?.stock}</p>
        <h3>${product?.precio}</h3>
        <ButtonComponent texto = "Agregar al Carrito"/>
    </article>
    </>
  )
}


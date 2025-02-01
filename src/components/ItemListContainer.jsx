import { useEffect, useState } from "react"
import "./ItemListContainer.css"
import ItemCard from "./ItemCard"
import { useParams } from "react-router-dom"
import { filtroCategorias , obtenerTodosLosJuegos } from "./async"
export default function ItemListContainer(){


let {catId} = useParams()
let [products, setProducts] = useState([])
useEffect(()=>{
    if(!catId){
        setProducts(obtenerTodosLosJuegos())
    }else{
        setProducts(filtroCategorias(catId))
    }
},[catId])

   return(
    <>
    <div className="container">
        {products.map(product => (<ItemCard key={product.id} product={product} />))}
    </div>
    </> 
   )
   

}
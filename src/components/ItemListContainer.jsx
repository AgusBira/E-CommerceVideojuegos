import { useEffect, useState } from "react"
import "./ItemListContainer.css"
import ItemCard from "./ItemCard"
import { useParams } from "react-router-dom"
import { filtroCategorias , obtenerTodosLosJuegos } from "./async"
import { getProducts } from "../firebase/firebase"
export default function ItemListContainer(){


let {catId} = useParams()
let [products, setProducts] = useState([])
useEffect(()=>{
    if(!catId){
        getProducts().then((products) => setProducts(products))
    }else{
        getProducts().then((products) => setProducts(filtroCategorias(catId,products)))
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
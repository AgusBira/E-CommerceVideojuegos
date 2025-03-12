import { useEffect, useState } from "react"
import "./ItemListContainer.css"
import ItemCard from "./ItemCard"
import { useParams } from "react-router-dom"
import { filtroCategorias , obtenerTodosLosJuegos } from "./async"
import { getProducts } from "../firebase/firebase"
export default function ItemListContainer(){


let {catId} = useParams()
let [products, setProducts] = useState([])
let [loading, setLoading] = useState(true)
useEffect(()=>{
    if(!catId){
        getProducts().then((products) => {
            setProducts(products)
            setLoading(false)
        })
    }else{
        getProducts().then((products) => {
            setProducts(filtroCategorias(catId,products))
            setLoading(false)
        })
    }
},[catId])

   return(
    <>
    {loading ? <h3 className="cargando">Cargando...</h3> : <div className="container">
        {products.map(product => (<ItemCard key={product.id} product={product} />))}
    </div>}
    
    </> 
   )
   

}
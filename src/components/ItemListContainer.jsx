import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ItemListContainer.css"
import ItemCard from "./ItemCard"
import { useParams } from "react-router-dom"
import { filtroCategorias } from "./async"
import { getProducts } from "../firebase/firebase"
import { Skeleton } from "@mui/material";
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
    <section className="itemListContainer">
    {loading ? <div className="loadingCardContainer">{
        
        Array.from({ length: 10 }).map(item => (
            <div className="loadingCard">
                <Skeleton  sx={{ bgcolor: 'grey.900' }} variant="rectangular" width={250} height={300} />
                <Skeleton  sx={{ bgcolor: 'grey.900' }} height={50} width={190} />
                <Skeleton  sx={{ bgcolor: 'grey.900' }} height={100} width={190} />
            </div>
        
            ))
        }</div> 
    
    : 
    <div className="container">
        {products.map(product => (<ItemCard key={product.id} product={product} />))}
    </div>}
    
    </section> 
   )
   

}
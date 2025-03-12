import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ItemListContainer.css"
import ItemCard from "./ItemCard"
import { useParams } from "react-router-dom"
import { filtroCategorias } from "./async"
import { getProducts } from "../firebase/firebase"
import { Spinner } from 'reactstrap';

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
    {loading ? <Spinner color="light" className="spinner" ></Spinner> : <div className="container">
        {products.map(product => (<ItemCard key={product.id} product={product} />))}
    </div>}
    
    </> 
   )
   

}
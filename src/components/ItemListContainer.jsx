import { useEffect, useState } from "react"
import "./ItemListContainer.css"
import ItemCard from "./ItemCard"
import img1  from "../assets/rdr2.jpeg"
import img2 from "../assets/codbo6.jpg"
import img3  from "../assets/tloztotk.jpg"
import img4  from "../assets/nba2k25.jpg"
import img5  from "../assets/citiesskylines.jpg"
import img6  from "../assets/doometernal.jpeg"
import img7  from "../assets/farmsimulator25.jpg"
import img8  from "../assets/tlozbotw.jpeg"
import { useParams } from "react-router-dom"
export default function ItemListContainer(){

let juegos = [
    { id: 1123, nombre: "The Legend of Zelda: Breath of the Wild", precio: 100, stock: 3, categoria: "aventura", console: "Nintendo Switch", rutaimg: img3 },
    { id: 2231, nombre: "Red Dead Redemption 2", precio: 100, stock: 3, categoria: "aventura", console: "PC/PS5/XBOX",rutaimg : img1 },
    { id: 3334, nombre: "Call of Duty: Black ops 6", precio: 120, stock: 3, categoria: "shooter", console: "PC/PS5/XBOX", rutaimg: img2 },
    { id: 4516, nombre: "NBA 2K25", precio: 120, stock: 3, categoria: "deportes", console: "PC/PS5/XBOX", rutaimg:img4},
    { id: 1010, nombre: "Cities: Skylines", precio: 80, stock: 3, categoria: "simulacion", console: "PC/PS5/XBOX", rutaimg: img5},
    { id: 1231, nombre: "Doom Eternal", precio: 80, stock: 3, categoria: "shooter", console: "PC/PS5/XBOX", rutaimg: img6 },
    { id: 1246, nombre: "Farming Simulator 25", precio: 60, stock: 3, categoria: "simulacion", console: "PC/PS5/XBOX", rutaimg: img7 },
    { id: 1241, nombre: "The Legend of Zelda: Tears of the Kingdom", precio: 120, stock: 3, categoria: "aventura", console: "Nintendo Switch", rutaimg: img8 }
]
let filtroCategorias = (categoria) =>{
    return juegos.filter(juego => juego.categoria === categoria)
}
let {catId} = useParams()

let [products, setProducts] = useState([])
useEffect(()=>{
    if(!catId){
        setProducts(juegos)
    }else{
        setProducts(filtroCategorias(catId))
    }
    
},[])

   return(
    <>
    <div className="container">
        {products.map(product => (<ItemCard key={product.id} product={product} />))}
    </div>
    </> 
   )
   

}
import { useContext, useEffect } from "react"
import "./FinalizarCompraContainer.css"
import { cartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import { sumaTotal } from "./async"
export default function FinalizarCompraContainer() {
    const [cart, setCart, UnitsCart] = useContext(cartContext)
    
    return (
        <>
            <div className="FinalizarCompraContainer">
                <h2>Valor total: ${sumaTotal(cart)}</h2>
                <Link to="/checkout"><button>Pasar a finalizar compra</button></Link>
            </div>
        </>
    )

    }
    

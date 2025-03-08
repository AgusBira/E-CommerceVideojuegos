import { useContext, useEffect } from "react"
import "./CartWidget.css"
import { cartContext } from "../context/CartContext"
export default function cartWidget (){
    const [cart,setCart,UnitsCart] = useContext(cartContext)
    return(
        <>
            <button className="cartwidget" href="">🛒{cart.length}</button>
        </>
    )
}
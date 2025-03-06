import { useContext, useEffect } from "react"
import cart from "../assets/cart4.svg"
import "./CartWidget.css"
import { cartContext } from "../context/CartContext"
export default function cartWidget (){
    const [cart,setCart,UnitsCart] = useContext(cartContext)
    return(
        <>
            <button href="">🛒{cart.length}</button>
        </>
    )
}
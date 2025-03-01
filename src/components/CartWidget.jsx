import { useContext } from "react"
import cart from "../assets/cart4.svg"
import "./CartWidget.css"
import { cartContext } from "../context/CartContext"
export default function cartWidget (){
    const [cart,setCart] = useContext(cartContext)
    return(
        <>
            <a href="">🛒 {cart.length}</a>
        </>
    )
}
import { useContext, useEffect } from "react"
import "./CartWidget.css"
import { cartContext } from "../context/CartContext"
export default function cartWidget (){
    const [cart] = useContext(cartContext)
    return(
        <>
            <button className={ "cartwidget" }href=""><img className="carticon" src="/cartIcon.png" alt="" />{cart.length}</button>
        </>
    )
}
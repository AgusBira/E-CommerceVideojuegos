import { useContext } from "react"
import "./CartWidget.css"
import { cartContext } from "../context/CartContext"
import CartItem from "./CartItem"
import "./Cart.css"
export default function Cart (){
    const [cart, setCart, addItem] = useContext(cartContext)
    return(
        <>
            <div className="cartContainer">
                  {cart.map(product => (<CartItem key={product.id} product={product} />))}
            </div>
        </>
    )
}
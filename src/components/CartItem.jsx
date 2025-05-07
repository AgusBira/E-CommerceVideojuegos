import "./CartItem.css"
import ButtonComponent from "./ButtonComponent";
import { useContext } from "react";
import { cartContext } from "../context/CartContext";
export default function CartItem({ product }) {

    const [cart,SetCart,addItem,removeItem] = useContext(cartContext)
    function handleClick(){
        removeItem(product)
    }

    return (
        <>
            <article article className="cartItem">
                <div className="containerImgCart">
                    <img src={product.rutaimg} alt="" />
                </div>
                <h4>{product.nombre}</h4>
                <p>{product.unidades}</p>
                <h3>${product.precio*product.unidades}</h3>
                <button onClick={handleClick}><img src="/trash.png" alt="" /></button>
            
            </article>
        </>
    );
}   
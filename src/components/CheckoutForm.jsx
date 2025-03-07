import "./CheckoutForm.css"
import { useContext } from "react";
import { cartContext } from "../context/CartContext";
import { sumaTotal } from "./async";
import Swal from 'sweetalert2'
export default function CheckoutForm({ product }) {
    const [cart, SetCart, addItem, removeItem] = useContext(cartContext)
    const handleClick = () => {
        SetCart([])
        Swal.fire({
            icon: "success",
            title: "Compra finalizada",
            text: "Gracias por su compra!!",
        });
    }
    return (
        <>
            <div className="formContainer">
                <form className="checkoutForm" action="">
                    <fieldset>Checkout</fieldset>
                    <label htmlFor="">Nombre:</label>
                    <input type="text" />
                    <label htmlFor="">Apellido:</label>
                    <input type="text" />
                    <label htmlFor="">Email:</label>
                    <input type="text" />
                    <h2>Valor total: ${sumaTotal(cart)}</h2>
                    <button onClick={handleClick}>Finalizar Compra</button>
                </form>
            </div>
        </>
    );
}   
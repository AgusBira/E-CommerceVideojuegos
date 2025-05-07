import "./CheckoutForm.css";
import { useContext, useState } from "react";
import { cartContext } from "../context/CartContext";
import { sumaTotal } from "./async";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function CheckoutForm({ product }) {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [cart, SetCart, addItem, removeItem] = useContext(cartContext);
    const [valor, setValor] = useState("");
    const [compra, SetCompra] = useState(false);

    const onSubmit = (data) => {
        SetCompra(true); // Marcar la compra como realizada
        Swal.fire({
            title: "Compra realizada",
            text: `Gracias por tu compra, ${data.nombre}!`,
            icon: "success",
            confirmButtonText: "Cerrar",
        });
        SetCart([]); // Vaciar el carrito
    };

    return (
        <section className="checkout">
            <div className="formContainer">
                <form className="checkoutForm" onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="tituloCheck">Checkout</fieldset>
                    <label htmlFor="">Nombre:</label>
                    <input
                        type="text"
                        placeholder="Ingrese su nombre"
                        {...register("nombre", { required: true, minLength: 2, maxLength: 20 })}
                    />
                    {errors.nombre && <p className="error">El nombre es obligatorio (2-20 caracteres)</p>}
                    <label htmlFor="">Email:</label>
                    <input
                        type="email"
                        placeholder="Ingrese su correo electrónico"
                        {...register("mail", { required: true })}
                    />
                    {errors.mail && <p className="error">Este campo es obligatorio</p>}
                    <label htmlFor="">Telefono:</label>
                    <input
                        type="number"
                        placeholder="Ingrese su telefono"
                        {...register("telefono", { required: true, minLength: 10, maxLength: 10 })}
                    />
                    {errors.telefono && <p className="error">Su numero no es valido (Ej: 1112345678)</p>}

                    <h2>Valor total: ${sumaTotal(cart)}</h2>

                    {!compra ? (
                        <button type="submit">Finalizar Compra</button>
                    ) : (
                        <section className="compraRealizada">
                            <p>Gracias por su compra!!</p>
                            <Link className="volverAlInicio" to="/">
                                <p>Volver al inicio</p>
                            </Link>
                        </section>
                    )}
                </form>
            </div>
        </section>
    );
}
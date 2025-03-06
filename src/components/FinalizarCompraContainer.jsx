import { useContext, useEffect } from "react"
import "./FinalizarCompraContainer.css"
import { cartContext } from "../context/CartContext"
export default function FinalizarCompraContainer (){
    const [cart,setCart,UnitsCart] = useContext(cartContext)
    function sumaTotal(cart){
        if(cart.length != 0){
            let subtotales = cart.map(product => (product.unidades*product.precio))
            return subtotales.reduce((acum,i) => acum +i)
        }else{
            return "0$"
        }
        

    }
    return(
        <>
            <div className="FinalizarCompraContainer">
                <h2>Valor total:{sumaTotal(cart)}</h2>
                <button>Finalizar Compra</button>
            </div>
        </>
    )
}
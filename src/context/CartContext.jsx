import { createContext, useState } from "react";
import Swal from 'sweetalert2'
export const cartContext = createContext()

export function CartProvider({children}){
    const [cart,SetCart] = useState([])

    const addItem = (item,units) =>{
        if(units === 0){
            Swal.fire({
                icon: "warning",
                title: "No se agregaron productos",
                text: "Indique la cantidad de productos que desee",
              });
            
        }else{
            if (cart.indexOf(item) === -1) {
                SetCart([...cart,item])
                item.unidades = units
            }else{  
                item.unidades += units
            }
        }
    }
    const removeItem = (item) =>{
        SetCart(cart.filter(product => product != item))
    }
    return(

        <cartContext.Provider value = {[cart,SetCart,addItem,removeItem]}>
            {children}
        </cartContext.Provider>
    )
}
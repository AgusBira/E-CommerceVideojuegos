import { createContext, useState } from "react";

export const cartContext = createContext()

export function CartProvider({children}){
    const [cart,SetCart] = useState([])
    

    const addItem = (item) =>{
        if (cart.indexOf(item) === -1) {
            SetCart([...cart,item])
        }
        console.log(cart)
            
        
    }
    const removeItem = (item) =>{
        let indice = cart.indexOf(item)
        SetCart(cart.splice(indice,1))
    }
    
    return(

        <cartContext.Provider value = {[cart,SetCart,addItem,removeItem]}>
            {children}
        </cartContext.Provider>
    )
}
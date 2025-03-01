import { createContext, useState } from "react";

export const cartContext = createContext()

export function CartProvider({children}){
    const [cart,SetCart] = useState([])
    

    const addItem = (item) =>{
        SetCart([...cart,item])
    }
    return(
        <cartContext.Provider value = {[cart,SetCart,addItem]}>
            {children}
        </cartContext.Provider>
    )
}
import { createContext, useState } from "react";

export const cartContext = createContext()

export function CartProvider({children}){
    const [cart,SetCart] = useState([])
    

    const addItem = (item) =>{
        if(!cart.includes(item)){
            SetCart([...cart,item])
            item.unidades = 1
        }else{
            if(item.unidades < item.stock){
                item.unidades++
            }
        }
        
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
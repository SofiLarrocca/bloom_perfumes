import { createContext } from "react";
import { useState } from "react";


export const CartContext = createContext ([])


const CartProvider = ({ children }) => { 

    const [cart, setCart] = useState ([{
        id: 1,
        nombre: 'primer producto',
        cantidad: 5,
    }])

   
    const añadir = (item, cantidad) => { 
        setCart ([...cart, {...item, cantidad:cantidad}])
    }

    
    return (
        <>
            <CartContext.Provider value = {{ cart, añadir}}>
                {children}    
            </CartContext.Provider> 
        </>
    )

};

export default CartProvider;
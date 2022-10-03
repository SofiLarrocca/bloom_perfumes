import { createContext, useContext } from "react";
import { useState } from "react";
 
const CartContext = createContext ([])

export const useCartContext = () => useContext (CartContext);

const CustomProvider = ({ children }) => { 

    const [cart, setCart] = useState ([])


    const clearCart = () => { 
        setCart ([])
    }

    const isInCart = (id) => { 
        return cart.find(prod => prod.id === id) ? true : false;
    }
   
    const removeItem = (id) => { 
        return cart.filter(prod => prod.id !== id)
    }

    const addItem = (item, counter) => { 
        const newCart = cart.filter(prod => prod.id !== item.id);
        newCart.push ({... item, cantidad:counter})
        setCart (newCart)
    }
    console.log (cart)

    return (
        <>
            <CartContext.Provider value = {{ 
                clearCart,
                isInCart,
                removeItem,
                addItem}}>
                {children}    
            </CartContext.Provider> 
        </>
    )

};

export default CustomProvider;
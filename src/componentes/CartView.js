import { useContext } from "react"
import { CartContext } from "./CartContext"


export const CartView = () => { 

    const { cart, añadir} = useContext(CartContext);

    console.log (cart)

    return (
        <>
        <h1>CARRITO</h1>
            {cart.map ((e) => ( 
                <div key = {e.id}>
                    <h1>{e.nombre}</h1>
                </div>
            ))}
        </>
    )
}

export default CartView
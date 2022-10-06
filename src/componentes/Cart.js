import { Link } from 'react-router-dom';
import { useCartContext } from './CartContext';
import { ItemCart } from './ItemCart';

export const Cart = () => { 
    const {cart, totalPrice} = useCartContext ();

   
    if (cart.length === 0 ) { 
    return (
        <>
            <p>'No hay productos en el carrito'</p>
            <Link to='/'> Comprar </Link>
        </>
    )
    } else { 
        return (
            <>
            <h2>Carrito de Compras:</h2>
            { cart.map ((prod)=> <ItemCart key = {prod.id}  item = {prod} /> )}
            </>
        )
    }
}
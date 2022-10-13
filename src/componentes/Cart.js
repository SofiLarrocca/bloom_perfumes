import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { useCartContext } from './CartContext';
import { ItemCart } from './ItemCart';
import { Formulario } from './Formulario';

export const Cart = () => { 
    const {cart, totalPrice} = useCartContext ();

    const order = {
        buyer: { 
            name: 'Sofi',
            email: 'sofi@hotmail.com',
            phone: '34549578',
            address: 'Pelegrini 200'
        },
        items: cart,
        total: totalPrice(),
    }
    
    const orderCompra = () => { 
        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, order)
        
        return (
            <>
                <Link to = '/formulario'></Link> 
            </>
        )

        
     
    }

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
                <h2>Carrito de Compras</h2>
                { cart.map ((prod)=> <ItemCart key = {prod.id}  item = {prod} /> )}
                <p>{totalPrice()}</p>

                <button onClick={orderCompra}>Terminar Compra</button>
            
            </>
        )
    }
}

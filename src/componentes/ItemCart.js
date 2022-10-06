import { useCartContext } from './CartContext';
import '../css/cartItem.css';

export const ItemCart = ({item}) => { 
    const {removeItem} = useCartContext();

    return (
        <>
            <div className="itemCart">
                <img src = {item.img} className = 'img-cart' />
                <p>Marca: {item.marca}</p>
                <p>Cantidad: {item.cantidad}</p>
                <p>Subtotal: $ {item.cantidad * item.precio}</p>
                <button onClick= {() => removeItem(item.id)}>Eliminar</button>
            </div>
        </>
    )
}

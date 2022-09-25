import '../cardProducto.css';
import Item from './Item'
import { Link } from 'react-router-dom';

const ItemList = (({ListaProductos})=> { 

    return (
        <>
            <div className='grid-container'>
                    {ListaProductos.map (prod => 
                        <Link to= {`detail/${prod.id}`}>
                            <Item key={prod.id} prod = {prod}/>
                        </Link>
                    )}
            </div>
        </>
    )
})

export default ItemList;
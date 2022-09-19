import '../cardProducto.css';
import Item from './Item'

const ItemList = (({ListaProductos})=> { 

    return (
        <>
        <div className='grid-container'>
        {ListaProductos.map (prod => 
            <Item key={prod.id} prod = {prod}/>
    )}
        </div>
        </>
    )
})

export default ItemList;
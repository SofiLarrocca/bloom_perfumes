import '../cardProducto.css'
import Item from './Item'

const ItemLIst = ((productos)=> { 

   return (
        <>
            <div className='item_list'>
                <Item props = {productos.props} />
            </div>
        </>
    )
});


export default ItemLIst;
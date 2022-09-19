import { useEffect, useState } from 'react';
import productos from '../productos'
import ItemList from './ItemList'
import { promesa } from '../utils/promesa'

const ItemListContainer = () => {

    const [ListaProductos, setListaProductos] = useState ([])

    useEffect (()=> { 
        promesa(productos)
        .then (res => setListaProductos (res))
    }, [])
 
   
    return (
        <ItemList ListaProductos = {ListaProductos} />
    )
};

export default ItemListContainer;
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productos from '../productos'
import ItemList from './ItemList'
import { promesa } from '../utils/promesa'

const ItemListContainer = ({greeting}) => {

    const [ListaProductos, setListaProductos] = useState ([])

    useEffect (()=> { 
        promesa(productos)
        .then (res => setListaProductos (res))
    }, [])
 
    return (
        <>  
            <h2>{greeting}</h2>
                <ItemList ListaProductos={ListaProductos} />
        </>
    )
};

export default ItemListContainer;
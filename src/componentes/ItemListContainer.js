import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productos from '../productos'
import ItemList from './ItemList'
import { promesa } from '../utils/promesa'
import '../css/ItemListContainer.css';

const ItemListContainer = ({greeting}) => {

    const [ListaProductos, setListaProductos] = useState ([])
    // const [prodCateogoria, setProdCategoria] = useState ({})

    let {categoria} = useParams ();

    useEffect(() => {
        promesa(productos, " ", { categoria })
            .then(res => {
                if (categoria) {
                    setListaProductos(res.filter((prod) => prod.categoria === categoria))
                } else setListaProductos(res); 
            })
    }, [categoria]);
 

    return (
        <>  
            <h2>{greeting}</h2>
            <ItemList ListaProductos={ListaProductos} />
        </>
    )
};

export default ItemListContainer;
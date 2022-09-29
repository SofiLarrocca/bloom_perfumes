import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productos from '../productos'
import { promesa } from '../utils/promesa'
import ItemDetail from './ItemDetail';




const ItemDetailContainer = () => {

    const [prod, setProd] = useState ({})

    const {id} = useParams ()
 
    useEffect(() => {
        promesa(productos)
            .then(res  => res.find(prodId => prodId.id === parseInt(id)))
            .then(res => {
                setProd(res); 
            })
    }, [id]);
 
    return (
        <>  
            <ItemDetail prod = {prod} />
        </>
    )
};

export default ItemDetailContainer;
import { useEffect, useState } from 'react';
import { Routes, Route} from 'react-router-dom'
import { Link, useParams } from 'react-router-dom';
import productos from '../productos'
import { promesa } from '../utils/promesa';
import Item from './Item';
import ItemList from './ItemList';


const Home = () => {

    const [prod, setProd] = useState ([])

    const {cat} = useParams ()

      useEffect (()=> { 
        promesa(productos, "" ,cat)
        .then (res => setProd (res))
    }, [cat])
    
    {console .log (prod)}
   
    return (
        <>
            <Link to = {`/mujer`} >
            <h2>MUJER</h2>
            </Link>
           
        </>
    )
};


export default Home;
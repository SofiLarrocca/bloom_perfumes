import { useState, useEffect } from "react";

const ItemDetail = () => {

    const [Art, setArt] = useState ([])


    useEffect (()=> { 
        fetch('https://fakestoreapi.com/products/5')
        .then(res=>res.json())
        .then(json=> setArt(json))
    }, [])

    console.log (Art)

    return (
        <>
        <h2>API FAKE STORE</h2>
         <div className='grid-container'>
            <div className='card-container'>
                <h3>{Art.title}</h3>
                <img src= {Art.image} className='img-prod'></img>
                <p>{Art.description}</p>
                <p>$ {Art.price}</p>
            </div>
        </div>
        </>
    )
};

    
    export default ItemDetail;
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleMinus} from '@fortawesome/free-solid-svg-icons'
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons'
import '../css/ItemCount.css';




function ItemCount({inicial, stock, onAdd}) {
    const [counter, setCounter] = useState(inicial);


    const agregar = () => {
        if (counter < stock) { 
            setCounter(counter + 1);
        }
    };

    const eliminar = () => {
        if (counter < 1) {
            setCounter(counter - 1);
        }
    };

    return (
        <>
            <div className="container">
                <div className="counter-container">
                    <FontAwesomeIcon onClick={eliminar} icon={faCircleMinus} onAdd = {onAdd} />
                    <p className="counter">{counter}</p>
                    <FontAwesomeIcon onClick={agregar} icon={faCirclePlus}/>
                </div>    
                <button className="button-count" onClick={onAdd}>Añadir al Carrito</button>
            </div>
        </>

    )
}

export default ItemCount;
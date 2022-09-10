import { useState } from "react";
import mon_paris from '../productos/mujer/mon_paris.jpg';
import '../contador.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ItemCount = ({stock}) => { 
    const [cantidad, setContador] = useState (1)
    
    const clickAgregar = () => { 
        if (cantidad < stock) { 
            setContador (cantidad + 1)
        } else { 
            toast.warn('Cantidad no disponible', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }

    const clickEliminar = () => { 
        if (cantidad > 1) { 
            setContador (cantidad - 1)
        }
    }

    const clickVaciar = () => { 
        setContador (0)
    }

    
    const clickComprar = () => { 
        if (cantidad > 0) {
            console.log (`Cantidad añadida a carrito:` + cantidad) 

            toast.success('¡ Gracias por tu compra !', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        } else { 
            toast.warn('Seleccione al menos una unidad', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }


    return (
        <>
            <div className="card_producto">
                <h2>IVES SAINT LAURENT</h2>
                <p>MON PARIS - 90 ML</p>
                <img src= {mon_paris} className= 'img_prod'></img>
                <div className="div_cantidad">
                    <button onClick={clickEliminar}>-</button>
                    <h3>{cantidad}</h3>
                    <button onClick={clickAgregar}>+</button>
                </div>
                <button onClick={clickVaciar}>Vaciar Carrito</button>
                <button onClick={clickComprar}>COMPRAR</button>
                <p className="p-left">Stock disponible: {stock}</p>
                <ToastContainer />
            </div>
        </>
    )
}

export default ItemCount;


 

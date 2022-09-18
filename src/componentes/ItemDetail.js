import ItemListContainer  from "./ItemListContainer"
import ItemList  from "./ItemList"
import { useEffect, useState } from "react";
import m_ch_212 from '../productos/mujer/m_ch_212.jpg'
// import Item from './Item'


/* OBJETO PRODUCTO */
const productoDetalle = {
    id: 1,
    genero: 'mujer',
    marca: 'Carolina Herrera',
    modelo: '212',
    tamano: '100 ml',
    precio: 20000,
    img: m_ch_212,
    descripcion: "El perfume de CH combina notas florales, cítricas y amaderadas para ofrecer una esencia fresca y ligera que acompaña a la mujer urbana durante toda su jornada.",
    }
;

const promesa = new Promise ((res, rej)=> { 

    setTimeout(() => {
        res(productoDetalle)
      }, 1000);
   
});

const ItemDetail = () => { 

    const [producto, setProducto] = useState ([]);

    useEffect (() => { 
        promesa.then ((data)=> {
            setProducto(data)
        })
        .catch (()=> { 
            console.log ('No se recibió la info')
        })
    }, [])

    return (
        <> 
        <p>Producto Seleccionado:</p>
        <div className="card_producto" key={producto.id}>
                    <h2>{producto.marca}</h2>
                    <p>{producto.modelo}</p>
                    <p>{producto.tamano}</p>
                    <img src={producto.img} width='50px' height='120px'></img>
                    <p>{producto.descripcion}</p>
                </div>
        </>
    )
};

export default ItemDetail;
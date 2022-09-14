import { useEffect, useState } from "react";
import ItemList from './ItemList'
import Item from './Item'
import m_ch_212 from '../productos/mujer/m_ch_212.jpg'
import m_ch_212_vip from '../productos/mujer/m_ch_212_vip.jpg'
import m_ch_212_vip_rose from '../productos/mujer/m_ch_212_vip_rose.jpg'
import m_ch_ch from '../productos/mujer/m_ch_ch.jpg'
import m_ch_good_girl from '../productos/mujer/m_ch_good_girl.jpg'


/* ARRAY PRODUCTOS */
const arrayProductos = [{
    id: 1,
    genero: 'mujer',
    marca: 'Carolina Herrera',
    modelo: '212',
    tamano: '100 ml',
    precio: 20000,
    img: m_ch_212,
    },
    {
    id: 2,
    genero: 'mujer',
    marca: 'Carolina Herrera',
    modelo: '212 Vip',
    tamano: '100 ml',
    precio: 22000,
    img: m_ch_212_vip,
},
{
    id: 3,
    genero: 'mujer',
    marca: 'Carolina Herrera',
    modelo: '212 Vip Rose',
    tamano: '100 ml',
    precio: 22000,
    img: m_ch_212_vip_rose,
},
{
    id: 4,
    genero: 'mujer',
    marca: 'Carolina Herrera',
    modelo: 'Carolina Herrera',
    tamano: '100 ml',
    precio: 22000,
    img: m_ch_ch,
},
{
    id: 5,
    genero: 'mujer',
    marca: 'Carolina Herrera',
    modelo: 'Good Girl',
    tamano: '100 ml',
    precio: 22000,
    img: m_ch_good_girl,
},
];

const promesa = new Promise ((res, rej)=> { 
    res(arrayProductos)
});

const ItemListContainer = () => { 

    const [productos, setProductos] = useState ([]);

    useEffect (() => { 
        promesa.then ((data)=> {
            setProductos(data)
        })
        .catch (()=> { 
            console.log ('No se recibió la info')
        })
    }, [])

    return (
        <> 
        <p>Productos:</p>
        <ItemList props={productos}/>
        </>
    )
};

export default ItemListContainer;
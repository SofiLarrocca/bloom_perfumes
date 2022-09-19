import '../cardProducto.css';

const Item = ({prod}) => { 
    return (
        <div className='card-container'>
            <p>{prod.marca}</p>
            <p>{prod.modelo}</p>
            <img src= {prod.img} className='img-prod'></img>
            <p>$ {prod.precio}</p>
        </div>
    )
}

export default Item;
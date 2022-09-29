
const Item = ({prod}) => { 
    return (
        <div className='card-container'>
            <img src= {prod.img} className='img-prod'></img>
            
            <h2 className='card-titulo'>{prod.marca}</h2>
            <h3>{prod.modelo}</h3>
            <h4>$ {prod.precio}</h4>
            <button className="button-item">Ver Más</button>
        </div>
    )
}

export default Item;
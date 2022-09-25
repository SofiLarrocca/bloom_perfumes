import '../cardProducto.css';

const ItemDetail = (({prod})=> { 

    return (
        <>
        <div className='container-detail'>
            <img src = {prod.img} className = 'img-prod'></img>
            <div>
                <h2>{prod.marca}</h2>
                <h2>{prod.modelo}</h2>
                <p>{prod.descipcion}</p>
            </div>
        </div>
               
        </>
    )
})

export default ItemDetail;
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../cardProducto.css'

const Item = (productos) => { 
    return (
        <>
            {productos.props.map((e)=>(
                <div className="card_producto" key={e.id}>
                    <h2>{e.marca}</h2>
                    <p>{e.modelo}</p>
                    <p>{e.tamano}</p>
                </div>
            ))}

            {/* <ToastContainer /> */}
        </>
    )
}

export default Item;
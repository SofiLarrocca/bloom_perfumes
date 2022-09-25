import productos from "../productos"


export const promesa = (productos, id, cat) => { 
    return new Promise ((res, rej) => { 
        setTimeout(() => {
            if (id || cat)  { 
                const producto = productos.find ((prod)=> prod.id === id)
                const categoria = productos.find ((prod)=> prod.genero === cat)
                res(producto)
                res(categoria)
            } else { 
                res (productos)
            }
        }, 0);
    });
}


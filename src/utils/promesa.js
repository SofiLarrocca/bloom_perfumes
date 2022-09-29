import productos from "../productos"


export const promesa = (productos, id, categoria) => { 
    return new Promise ((res, rej) => { 
        setTimeout(() => {
            res(productos)
        }, 0);
    });
}


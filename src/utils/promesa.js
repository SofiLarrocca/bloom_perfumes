import productos from "../productos"


export const promesa = (productos) => { 
    return new Promise ((res, rej) => { 
        setTimeout(() => {
            res (productos)
        }, 2000);
    });
}

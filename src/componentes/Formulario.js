import { useState } from "react"

export const Formulario = () => { 

    return (
       <form>
        <label>Nombre:
            <input type='text' name='nombre'></input>
        </label>
        <label>Appellido:
            <input type='text' name='apellido'></input>
        </label>
        <label>Appellido:
            <input type='email' name='email'></input>
        </label>
        <label>Numero Teléfono:
            <input type='number' name='telefono'></input>
        </label>
        <label>Detalle compra
            <input type='text' name='cart'></input>
        </label>
       </form>
    )
}




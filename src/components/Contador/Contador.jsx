import React from 'react'
import { useState, useEffect } from 'react'


//El efecto primario de REACT es renderizar componentes, peeeero una aplicacion debe realizar otras operaciones ademas de mostrarse.
// por ejemplo: consumir datos de un servidor, usar eventos, etc.

//Vamos a trabajar con 'useEffect' que me permite controlar los efectos SECUNDARIOS provocados por el cambio de estado.
//El  hook useEffect recibe dos parametros: funcion que va a ejecutar y un arreglo de dependencias

//  Sintaxis:        useEffect (() => {funcion a ejecutar}, [dependencia])


const Contador = ({ stock, inicial }) => {

    const [contador, setContador] = useState(inicial)
    const [color, setColor] = useState('black')

    useEffect(() => {
        if (contador >= 5) {
            setColor("red")
        } else {
            setColor("green")
        }
    }, [contador])


    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1)
        }
    }

    return (
        <>
            <button onClick={decrementar}>-</button>
            <strong>{contador}</strong>
            <button onClick={incrementar}>+</button>
            <button style={{color:color}}>Stock</button>
        </>
    )
}
export default Contador
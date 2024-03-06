import { useState,  useEffect } from 'react';

import React from 'react'

const Categorias = () => {

    const [categoria, setCategorias] = useState("inicial")

    useEffect (() => {
        document.title= `Categoria ${categoria}`
    } ,[categoria])

    const manejarCategorias = (categoria) => {
        setCategorias(categoria)
    }

  return (
    <div>
        <h2>Categorias de los productos</h2>
        <button onClick={() => manejarCategorias("Frutas")}>Frutas</button>
        <button onClick={() => manejarCategorias("Verduras")}>Verduras</button>
        <button onClick={() => manejarCategorias("Cereales")}>Cereales</button>
        <button onClick={() => manejarCategorias("Lacteos")}>Lacteos</button>
    </div>
  )
}

export default Categorias
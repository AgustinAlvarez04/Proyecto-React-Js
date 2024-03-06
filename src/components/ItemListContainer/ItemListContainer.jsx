import { useState, useEffect } from "react"
import { getProductos } from "../../asyncMocks"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    useEffect(() => {
        getProductos()
            .then(respuesta => {
                setProductos(respuesta)
                console.log(productos)
            })
    })


    return (
        <>
            <ItemList productos={productos} />
        </>
    )

}

export default ItemListContainer
const Articulos = ({titulo, img, children}) => {

    return (
        <div>
            <img src={img} alt="Imagen"/>
            <h1>{titulo}</h1>
            {children}
            <button>Ver Producto</button>
        </div>
    )

}

export default Articulos
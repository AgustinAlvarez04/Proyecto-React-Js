const Productos = []

export const getProductos = () => {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(Productos);
        }, 2500)
    })
}
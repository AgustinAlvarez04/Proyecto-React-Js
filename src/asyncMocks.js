const Productos = [
    {id: 1, name:"azucar", precio: 200},
    {id: 2, name:"salsa", precio: 300},
    {id: 3, name:"papas", precio: 400},
    {id: 4, name:"tomate", precio: 500},
    {id: 5, name:"harina", precio: 600},
]

export const getProductos = () => {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(Productos);
        }, 2500)
    })
}
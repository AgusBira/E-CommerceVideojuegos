export let filtroCategorias = (categoria,productos) =>{
    return productos.filter(producto => producto.categoria === categoria)
}
export let buscarProducto = (id,productos) => {
    return productos.find(producto => producto.id === id)
}

export let obtenerTodosLosJuegos = () =>{
    return juegos
}
export let sumaTotal =(cart) => {
    if (cart.length != 0) {
        let subtotales = cart.map(product => (product.unidades * product.precio))
        return subtotales.reduce((acum, i) => acum + i)
    } else {
        return "0"
    }}
export let filtroCategorias = (categoria,productos) =>{
    return productos.filter(producto => producto.categoria === categoria)
}
export let buscarProducto = (id,productos) => {
    return productos.find(producto => producto.id === id)
}

export let obtenerTodosLosJuegos = () =>{
    return juegos
}
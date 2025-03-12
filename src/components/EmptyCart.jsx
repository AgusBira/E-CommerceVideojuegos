import "./EmptyCart.css"
export default function EmptyCart (){
    return(
        <>
            <div className="emptyCartContainer">
                <h2>Su carrito esta vacio!</h2>
                <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="" />
                <p>Agregue productos desde nuestro catalogo</p>
            </div>
        </>
    )
}
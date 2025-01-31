import "./ItemCard.css"
export default function ItemCard({product}) {

    return (
        <>
          <article className="itemcard">
            <img src={product.rutaimg} alt="" />
            <h4>{product.nombre}</h4> 
            <button>Ver Detalles</button>
          </article>
        </>
    );
}   
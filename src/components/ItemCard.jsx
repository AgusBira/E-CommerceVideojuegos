import "./ItemCard.css"
import ButtonComponent from "./ButtonComponent";
import { Link } from "react-router-dom";
export default function ItemCard({product}) {

    return (
        <>
          <article className="itemcard">
            <div className="containerimg">
              <img src={product.rutaimg} alt="" />
            </div>
            <div className="nombreproducto">
              <h4>{product.nombre}</h4> 
              <Link to={`/product/${product.id}`}><ButtonComponent texto="Mas detalle"/></Link>
            </div>
            
            
          </article>
        </>
    );
}   
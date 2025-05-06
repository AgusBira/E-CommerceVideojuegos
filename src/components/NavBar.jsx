import ButtonComponent from "./ButtonComponent.jsx"
import LogoComponent from "./LogoComponent.jsx"
import CartWidget from "./CartWidget.jsx"
import "./NavBar.css"
import { Link } from "react-router-dom"
import { cartContext } from "../context/CartContext.jsx"
import { useContext } from "react"
export default function tituloComponente() {
const [cart] = useContext(cartContext)
  return (
    <>
      <nav>

        <Link to="/categoria/aventura"><ButtonComponent texto = "Aventura"/></Link>
        <Link to="/categoria/shooter"><ButtonComponent texto = "Shooter"/></Link>
        <Link to="/categoria/deportes"><ButtonComponent texto = "Deportes"/></Link>
        <Link to="/categoria/simulacion"><ButtonComponent texto = "Simulacion"/></Link>
        <Link className={cart.length === 0 ? "hidden" : ""} to= "/cart"><CartWidget/></Link>
      </nav>
        
    </>
  )
}


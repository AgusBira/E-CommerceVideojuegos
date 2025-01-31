import logo from "../assets/logo.png"
import "./logoComponent.css"
export default function LogoComponent (){
    return(
        <>
           <button className="logoComponent"><img src={logo} alt="" /></button>
        </>
    )
    
}
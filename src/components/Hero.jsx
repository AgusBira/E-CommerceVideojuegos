import React, { useEffect } from 'react'
import "./Hero.css"
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css';
export default function Hero() {

    useEffect(()=>{
        AOS.init({})
    },[])
  return (
    <>
        <section  className='heroSection'>
            <Link to={"/"}>
            <div data-aos="zoom-in" data-aos-duration="2000"  className='container-img'>
                <img src="/coliseum.png" alt="" />
            </div>
            </Link>
            
            <div data-aos="flip-down"  className='presentacion'>
                <h1>Bienvenido!</h1>
                <h2>Explora nuestro catalogo de juegos!!</h2>
            </div>
        </section>
    </>
  )
}

import React from 'react'
import "./Hero.css"
import { Link } from 'react-router-dom'
export default function Hero() {
  return (
    <>
        <section className='heroSection'>
            <Link to={"/"}>
            <div className='container-img'>
                <img src="/coliseum.png" alt="" />
            </div>
            </Link>
            
            <div className='presentacion'>
                <h1>Bienvenido!</h1>
                <h2>Explora nuestro catalogo de juegos!!</h2>
            </div>
        </section>
    </>
  )
}

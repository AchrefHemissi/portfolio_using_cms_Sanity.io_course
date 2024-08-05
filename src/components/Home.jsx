import React from 'react'
import image from "../assets/images/monstera-leaves.c5b7dcf2.jpg"
const Home = () => {
  return (
    <>
    <img src={image} alt="monstera leaves" className="absolute object-cover w-full h-full"/> 
    <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className='text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name '>Welcome to the Home Page</h1>
    </section>
    </>
    
  )
}

export default Home
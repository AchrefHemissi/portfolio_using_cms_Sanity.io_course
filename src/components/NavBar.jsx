import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

const NavBar = () => {
  const linkClassHomePage =
  ({ isActive }) => (isActive ? 'text-white inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest' : 'inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest');

  const linkClass =
  ({ isActive }) => (isActive ? 'text-red-100 bg-red-700 inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800' : 'inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800');

  return (
    <header className='bg-red-600 '>
      <div className='container mx-auto flex justify-between '>
        <nav className='flex'>
          <NavLink to='/' 
          className={linkClassHomePage}>
            Home Page
          </NavLink>

          <NavLink to = '/post' 
          className={linkClass}>
            Blog Posts
          </NavLink>

          <NavLink to='/project' 
          className= {linkClass}>
            Projects
          </NavLink>

          <NavLink to='/about' 
          className= {linkClass}>
            About Me!
          </NavLink>
          
        </nav>

        <div className='inline-flex py-3 px-3 my-6'>

        <SocialIcon url='https://www.linkedin.com/in/mohammed-achref-hemissi/' className='mr-4' target='_blank' fgColor='#fff' style={{ height: 35, width: 35 }} />
        <SocialIcon url='https://github.com/AchrefHemissi' className='mr-4' target='_blank' fgColor='#fff' style={{ height: 35, width: 35 }} />
        
      </div>
      </div>
      
    </header>
  )
}

export default NavBar
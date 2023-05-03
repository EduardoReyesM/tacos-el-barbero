import React from 'react'
import img1 from '../images/El-Barbero.png'
//import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='Nav'>
        <img src={img1} alt='image' className='Logo' />
        <nav className='Nav-seperate'>
            <a className='Nav-sep' href='/'>Home</a>
            <a className='Nav-sep' href='Menu'>Menu</a>
            <a className='Nav-sep' href='Recipe'>Recipe</a>
            <a className='Nav-sep' href='AboutUs'>AboutUs</a>
        </nav>
    </div> 
  )
}

export default Nav;
import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <nav className='menu'>
       <ul className='dflex'>
           <li>
               <Link to='/about'>About</Link>
           </li>
       </ul> 
    </nav>
  )
}

export default Menu
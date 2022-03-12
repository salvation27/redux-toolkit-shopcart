import React from 'react'
import Menu from '../Menu/Menu'
import Logo from '../Logo/Logo'
import CartMenu from '../CartMenu/CartMenu'

const Header = () => {
  return (
    <div className='header dflex'>
        <Logo />
        <Menu />
        <CartMenu />
    </div>
  )
}

export default Header
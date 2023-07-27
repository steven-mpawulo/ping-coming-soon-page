import React from 'react'
import Logo from '../../images/logo.svg'
import './header.css'

const Header = () => {
  return (
    <header>
        <div className="my-header">
            <img src={Logo} alt="logo" />
        </div>
    </header>
  )
}

export default Header
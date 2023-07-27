import React from 'react'
import {FaFacebook,FaInstagram} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
import './footer.css'
import { IconContext } from 'react-icons'


const Footer = () => {
  return (
    <div className="my-footer">
        <div className="icons-container">
        <IconContext.Provider value={{className: "footer-icons"}}>
        <FaFacebook/>
        <AiFillTwitterCircle/>
        <FaInstagram/>
        </IconContext.Provider>

        </div>
        <p className='copyright-text'>&copy;Copyright Ping. All rights reserved.</p>
    </div>
  )
}

export default Footer
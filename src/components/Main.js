import React from 'react'
import Illustration from '../images/illustration-dashboard.png'
import './coming-soon-page/main.css'

const Main = () => {
  return (
    <main>
        <div className='container-for-main'>
        <p className='first-text'><span>We are launching</span> <strong>soon!</strong></p>
        <p className='second-text'>Suscribe and get notified</p>
        <div className='container-for-input-button'>
            <input type="email" name='email' id='email' placeholder='Your email address' />
            <button>Notify Me</button>
        </div>
        <img src= {Illustration} alt="illustration" className='illustration' />
    </div>
    </main>
  )
    
}

export default Main
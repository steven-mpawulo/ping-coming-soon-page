import React from 'react'
import Illustration from '../images/illustration-dashboard.png'

const Main = () => {
  return (
    <main>
        <div>
        <p>We are launching <strong>soon!</strong></p>
        <p>Suscribe and get notified</p>
        <div>
            <input type="email" name='email' id='email' />
            <button>Notify Me</button>
        </div>
        <img src= {Illustration} alt="illustration" />
    </div>
    </main>
  )
    
}

export default Main
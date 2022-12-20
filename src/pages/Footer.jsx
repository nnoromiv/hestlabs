import React from 'react'
import { Socials } from './components/Navigation'
import './styles/footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='right'>
            <h3>©2022 Hest labs. All rights reserved.</h3>
        </div>
        <div className='left'>
            <Socials />
            <p>Terms Of Service</p>
            <p>Privacy Policy</p> 
        </div>
    </div>
  )
}

export default Footer
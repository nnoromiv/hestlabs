import React from 'react'
import Navigation, { LanguageChange, Socials } from '../Navigation'
import { Logo, WorldIcon } from '../Icons'
import './styles/topbar.css'

const Topbar = () => {
  return (
    <header className='topbar' >
         <div className='logo'>
         <img alt='logo' src={Logo} />
         <h1> Hest</h1>
         </div>
         <section className='languagechange'>
                <img alt='world' src={WorldIcon} />
                <LanguageChange />
            </section>
         <div className='navigation' >
            <Navigation />
         </div>
         <div className='socials'>
            <Socials />
         </div>
    </header>
  )
}

export default Topbar
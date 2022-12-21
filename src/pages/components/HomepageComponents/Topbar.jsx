import React from 'react'
import Navigation, { HamBurgerMenu, LanguageChange, Socials } from '../Navigation'
import { Logo, WorldIcon } from '../Icons'
import './styles/topbar.css'

export const MyLogo = (props) => {
   return (
      <div className={props.classname}>
         <img alt='logo' src={Logo} />
         <h1> Hest</h1>
      </div>
   )
}

const Topbar = () => {
  return (
    <header className='topbar' >
         <MyLogo classname='logo'/>
         <section className='languagechange'>
            <img alt='world' src={WorldIcon} />
            <LanguageChange />
         </section>
         <div className='navigation' >
            <Navigation />
         </div>
         <div className='hamburgermenu'>
            <HamBurgerMenu />
         </div>
         <div className='socials'>
            <Socials />
         </div>
    </header>
  )
}

export default Topbar
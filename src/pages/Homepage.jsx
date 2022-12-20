import React from 'react'
import Topbar from './components/HomepageComponents/Topbar'
import Hero from './components/HomepageComponents/Hero'
import './styles/homepage.css'
import Videobackground from './components/HomepageComponents/Videobackground'

const Homepage = () => {
  return (
    <div className='homepage'>
    <div className='homepagebody'>
    <Topbar />
    <Hero />
    </div>
    <Videobackground />
    </div>
  )
}

export default Homepage

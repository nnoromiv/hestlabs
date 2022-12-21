import React from 'react'
import Topbar from './components/HomepageComponents/Topbar'
import Hero from './components/HomepageComponents/Hero'
import './styles/homepage.css'
import Videobackground, { Phonevideobackground } from './components/HomepageComponents/Videobackground'

const Homepage = () => {
  return (
    <div className='homepage'>
    <div className='homepagebody'>
    <Topbar />
    <Hero />
    </div>
    <div className='large'>
    <Videobackground />
    </div>
    <div className='phone'>
      <Phonevideobackground />
    </div>
    </div>
  )
}

export default Homepage

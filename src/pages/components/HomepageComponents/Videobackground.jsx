import React from 'react'
import './styles/videobackground.css'

const Videobackground = () => {
  return (
/* A video tag that is playing the video in the background. muted to allow autoplay function well */
    <video autoPlay playsInline muted className='background next'>
      <source src='/video/video-bg.mp4' type='video/mp4' />
    </video>
  )
}

export default Videobackground

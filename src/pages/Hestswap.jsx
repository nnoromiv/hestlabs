import React from 'react'
import './styles/hestswap.css'
import { useParallax } from 'react-scroll-parallax';
import SwapBody from './components/HestswapComponent/SwapBody.jsx';

const Hestswap = () => {
/* A function that is used to create a parallax effect. */
const parallax = useParallax({
        translateY: ['0px', '-600px'],
        speed: 160,
        easing: 'easeOut'
    })
  return (
    <div className='hestswap' /* A reference to the parallax effect. */
    ref={parallax.ref} id='swap-link'>
        <SwapBody />
    </div>
  )
}

export default Hestswap

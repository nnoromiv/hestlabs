import React from 'react'
import './styles/heststake.css'
import { useParallax } from 'react-scroll-parallax';
import StakeBody from './components/HeststakeComponent/StakeBody.jsx';
import Owners from './components/HeststakeComponent/Owners';

const Heststake = () => {
/* A function that is used to create a parallax effect. */
const parallax = useParallax({
        translateY: ['0px', '-600px'],
        speed: 240,
        easing: 'easeOut'
    })
  return (
    <div className='heststake' /* A reference to the parallax effect. */
    ref={parallax.ref} id='stake-link'>
        <StakeBody />
        <Owners />
    </div>
  )
}

export default Heststake

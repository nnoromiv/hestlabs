import React from 'react'
import './styles/hestpay.css'
import { useParallax } from 'react-scroll-parallax';
import PayBody from './components/HestpayComponent/PayBody.jsx';

const Hestpay = () => {
/* A function that is used to create a parallax effect. */
    const parallax = useParallax({
        translateY: ['0px', '-600px'],
        speed: 80,
        easing: 'easeOut'
    })
  return (
    <div className='hestpay' /* A reference to the parallax effect. */
    ref={parallax.ref}>
        <PayBody />
    </div>
  )
}

export default Hestpay

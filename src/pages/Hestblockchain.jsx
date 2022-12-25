import React from 'react'
import './styles/hestblockchain.css'
import { useParallax } from 'react-scroll-parallax';
import BlockchainBody from './components/HestblockchainComponent/BlockchainBody';
import BlockchainFooter from './components/HestblockchainComponent/BlockchainFooter';

const Hestblockchain = () => {
/* A function that is used to create a parallax effect. */
    const parallax = useParallax({
        translateY: ['0px', '-600px'],
        speed: -10,
    })
  return (
    <div className='hestblockchain' /* A reference to the parallax effect. */
    ref={parallax.ref} id='blockchain-link'>
        <BlockchainBody />
        <BlockchainFooter />
    </div>
  )
}

export default Hestblockchain

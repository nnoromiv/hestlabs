import React from 'react'
import { useParallax } from 'react-scroll-parallax'
import Cards from './components/BlockchainComponents/Cards'
import Blockchainlist from './components/BlockchainComponents/Blockchainlist'
import './styles/blockchain.css'

const Blockchain = () => {
  /* A function that is used to create a parallax effect. */
  const H2parallax = useParallax({
    translateX: ['-100px', '0px'],
  })
  const Pparallax = useParallax({
    translateX: ['-100px', '0px'],
  })
  return (
    <div className='blockchain'>
    <Cards />
    <h2 ref={H2parallax.ref}>
    Swap & Stake <br />
    across chains
    </h2>
    <Blockchainlist />
    <p id='note'>
    Hest products are available <br />
    across multiple blockchains.
    </p>
    <div className='participant'>
      <p ref={Pparallax.ref}>
      A new ecosystem of products<br />
      allowing people to participate<br />
      in crypto journey.
      </p>
      <h2>
      100%<br />
      participation
      </h2>
    </div>
    </div>
  )
}

export default Blockchain
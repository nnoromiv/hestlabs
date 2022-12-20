import React from 'react'
import './styles/blockchainfooter.css'
import { WHITECITY } from '../Icons'

const BlockchainFooter = () => {
  return (
    <div className='blockchainfooter'>
    <h1>
      Hest Verse
    </h1>
    <div>
    The Hestverse, To provide users with a decentralized platform to socialize from around the world and play to earn, the Hestverse is establishing a metaverse with the integration of NFTs.The Metaverse is a space where traditional services can be thoroughly revamped and re-imagined for an age where digital barriers will be essentially non-existent. But more than this, a whole new wave of projects will gradually terraform the Metaverse landscape to fuel the endless creativity, deeper connections, better productivity, and future of entertainment that will become characteristic of the Metaverse in the months and years to come.
    </div>
    <img className='i1' width='100%' height='500px' alt='white-house' src={WHITECITY} />
    <img className='i2' width='100%' height='500px' alt='white-house' src={WHITECITY} />
    </div>
  )
}

export default BlockchainFooter

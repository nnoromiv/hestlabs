import React from 'react'
import HubIcon from '@mui/icons-material/Hub';
import { Button } from 'react-bootstrap';
import './styles/blockchainbody.css'

const BlockchainBody = () => {
  return (
    <div className='blockchainbody'>
        <div className='intro'>
        <div className='intro-head'>
            <HubIcon sx={{fontSize: 40}} />
            <h2> Hest Blockchain</h2>
        </div>    
        <div className='intro-body'>
            <h1>Hest<br />
            Blockchain</h1>
            <p>
            We want to empower the world to invest in, trade, and manage digital assets.<br />
            Hestlabs has a different overall investment strategy and can deploy<br />
            capital to various assets. It's liquidity pool provide<br />
            liquidity across different chains, a value fund looking to make early,<br />
            medium to long-term investments into undervalued assets.
            </p>
            <Button className='intro-button'>Explore</Button>
        </div>
    </div>  
    <div className='video-gif' >
    {/* <img alt='gif' src="/video/facebook.gif" ></img> */}
        <img alt='gif' src='/video/metaverse.gif' />
    </div>
    </div>
  )
}

export default BlockchainBody
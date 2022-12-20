import React from 'react'
import FitbitIcon from '@mui/icons-material/Fitbit';
import { Button } from 'react-bootstrap';
import './styles/swapbody.css'

const SwapBody = () => {
  return (
    <div className='swapbody'>
        <div className='intro'>
        <div className='intro-head'>
            <FitbitIcon sx={{fontSize: 40}} />
            <h2> Hest Swap</h2>
        </div>    
        <div className='intro-body'>
            <h1>Matching digital<br />
            swaps and DEX for greater<br />
            finance</h1>
            <p>
            We believe that, in addition to traditional<br />
            forms of linking NFTs such as traditional<br />
            paintings and electronic posters, any<br />
            customized, non-standard delivery, and<br />
            electronically delivered works can be linked<br />
            to the world of NFTs. Using NFTs as delivery<br />
            credentials and the immutable record<br />
            function of the blockchain decentralized<br />
            network, the author, buyer, transaction time,<br />
            and work URL will be permanently traced<br />
            and recorded.<br />
            </p>
            <Button className='intro-button'>Explore</Button>
        </div>
    </div>  
    <div className='image' >
        <img alt='pay' src='https://bounce.finance/images/bounce-auction/screen.jpg' />
    </div>
    </div>
  )
}

export default SwapBody
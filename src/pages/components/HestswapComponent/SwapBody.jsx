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
            swaps and DEX for greater finance</h1>
            <p>
            Hest swap is the one-stop decentralized trading platform across networks.<br/ >
            Hest swap began with the vision of creating a community-owned<br />
            decentralized exchange which owns liquidity on Hest swap<br />
            and governs itself via prediction market.
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
import React from 'react'
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import { Button } from 'react-bootstrap';
import './styles/stakebody.css'
import { CMCLOGO, COINGECKOLOGO } from '../Icons';


const StakeBody = () => {
  return (
    <div className='stakebody'>
        <div className='intro'>
        <div className='intro-head'>
            <ScatterPlotIcon sx={{fontSize: 40}} />
            <h2> Hest Stake</h2>
        </div>    
        <div className='intro-body'>
            <h1> Stake.Earn.<br />
            Relax</h1>
            <p>
              We are building the infrastructure backbone of the ecosystem<br />
              and paving the way to a decentralized future.
            </p>
            <Button className='intro-button' href='https://coinmarketcap.com/currencies/hest-stake'>
              <img src={CMCLOGO} srcSet='' alt='coinmarketcap'/>
            </Button>
            <Button className='intro-button' href='https://www.coingecko.com/en/coins/hest-stake'>
              <img src={COINGECKOLOGO} srcSet='' alt='coinmarketcap'/>
            </Button>            
        </div>
    </div>  
    <div className='image' >
        <img alt='pay' src='https://raw.githubusercontent.com/nnoromiv/hestlabs/master/public/images/Blockchain.png' />
    </div>
    </div>
  )
}

export default StakeBody
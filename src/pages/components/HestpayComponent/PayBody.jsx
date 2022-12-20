import React from 'react'
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import { Button } from 'react-bootstrap';
import './styles/paybody.css'

const PayBody = () => {
  return (
    <div className='paybody'>
        <div className='intro'>
        <div className='intro-head'>
            <ScatterPlotIcon sx={{fontSize: 40}} />
            <h2> Hest Pay</h2>
        </div>    
        <div className='intro-body'>
            <h1>Unlock the<br />
            potential of open<br />
            finance</h1>
            <p>
            Trade scarce digital assets in a competitive swap<br />
            environment on our versatile, decentralized and trustless<br />
            auction platform.<br />
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

export default PayBody
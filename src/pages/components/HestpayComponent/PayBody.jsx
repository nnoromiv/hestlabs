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
            <h1>Unlocking open finance</h1>
            <p>
            Hest pay would support a wide range of tokens among different <br />
            chains like BNB Chain, Polygon and Ethereum. Integration of<br />
            different chains is also planned to widen the coverage of<br />
            tokens supported by the platform
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
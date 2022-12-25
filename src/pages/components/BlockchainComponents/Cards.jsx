import React from 'react'
import { CardGroup, Card, Button } from 'react-bootstrap'
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import FitbitIcon from '@mui/icons-material/Fitbit';
import HubIcon from '@mui/icons-material/Hub';
import ModeFanOffIcon from '@mui/icons-material/ModeFanOff';
import './styles/cards.css'

const CARDINFOS = [
    {
        cardClassname: 'c3',
        cardTitle: 'Blockchain',
        cardImage: <HubIcon sx={{fontSize: 50}} />,
        cardHrf: 'blockchain-link'
    },
    {
        cardClassname: 'c1',
        cardTitle: 'Hest Pay',
        cardImage: <ScatterPlotIcon sx={{fontSize: 50}} />,
        cardHrf: 'pay-link'
    },
    {
        cardClassname: 'c2',
        cardTitle: 'Hest Swap',
        cardImage: <FitbitIcon sx={{fontSize: 50}} />,
        cardHrf: 'swap-link'
    },
    {
        cardClassname: 'c4',
        cardTitle: 'Hest Stake',
        cardImage: <ModeFanOffIcon sx={{fontSize: 50}} />,
        cardHrf: 'stake-link'
    },
]

export function cardHide (){
    var cardGroup = document.getElementById('card-group');
    cardGroup.style.display = 'none'
}

export function cardShow (){
    var cardGroup = document.getElementById('card-group');
    cardGroup.style.display = 'grid'
}


const Cards = () => {
  return (
    <CardGroup id='card-group'>
        {
            CARDINFOS.map((item, index) => {
                return(
                    <Card id='card' className={item.cardClassname}
                    key={index}
                    >
                {item.cardImage}
            <Card.Body id='card-body'>
                <Card.Title id='card-title'>{item.cardTitle}</Card.Title>
                <section className='card-inner' >
                    <Button variant='light' id='card-button' href={`#${item.cardHrf}`}>Landing page</Button>
                    <p style={{display:'flex !important'}}> Learn more</p>
                </section>
            </Card.Body>
        </Card>
                )})
        }
    </CardGroup>
  )
}

export default Cards

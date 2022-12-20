import { Divider } from '@mui/material'
import React from 'react'
import './styles/partners.css'


const PARTNERS = [
    {
        text: 'Binance',
        classname: 'p1',
    },
    {
        text: 'Binance',
        classname: 'p1',
    },
    {
        text: 'Binance',
        classname: 'p1',
    },
    {
        text: 'Binance',
        classname: 'p1',
    },
     {
        text: 'Binance',
        classname: 'p1',
    },
     {
        text: 'Binance',
        classname: 'p1',
    },
]

const Partners = () => {
  return (
    <div className='partners'>
        <h1>Backed by</h1>
        <div className='partners-list' >    
       {
        PARTNERS.map((partner, index) => {
            return (                
                <div key={index}>{partner.text}</div>
            )
        } )
       }
       </div>
       <Divider className='li'/>
    </div>
    
  )
}

export default Partners
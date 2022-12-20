import { Divider } from '@mui/material'
import React from 'react'
import './styles/partners.css'
import StarIcon from '@mui/icons-material/Star';


const PARTNERS = [
    {
        text: 'Nomics',
        classname: 'p1',
        icon: <StarIcon className='icon'/>,
    },
    {
        text: 'Livecoinwatch',
        classname: 'p1',
        icon: <StarIcon className='icon'/>,
    },
    {
        text: 'Forbes',
        classname: 'p1',
        icon: <StarIcon className='icon'/>,
    },
    {
        text: 'Exchangily',
        classname: 'p1',
        icon:'',
    },
    {
        text: 'Hyperpay',
        classname: 'p1',
        icon: <StarIcon className='icon'/>,
    },
    {
        text: 'Misses',
        classname: 'p1',
        icon: <StarIcon className='icon'/>,
    },
    {
        text: 'Paycool',
        classname: 'p1',
        icon: <StarIcon className='icon'/>,
    },
    {
        text: 'Web3ORB',
        classname: 'p1',
        icon:'',
    },
    {
        text: 'Octium',
        classname: 'p1',
        icon: <StarIcon className='icon'/>,
    },
    {
        text: 'Xeggex',
        classname: 'p1',
        icon: <StarIcon className='icon'/>,
    },
    {
        text: 'Bi-Finance',
        classname: 'p1',
        icon: <StarIcon className='icon'/>,
    },
    {
        text: 'Galaxy labs',
        classname: 'p1',
        icon:'',
    },
]

const Partners = () => {
  return (
    <div className='partners'>
        <h1>Partners</h1>
        <div className='partners-list' >    
       {
        PARTNERS.map((partner, index) => {
            return (            
                <>    
                <div key={index}>{partner.text}</div>
                {partner.icon}
                </>
            )
        } )
       }
       </div>
       <Divider className='li'/>
    </div>
    
  )
}

export default Partners
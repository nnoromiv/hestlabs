import { Divider } from '@mui/material'
import React from 'react'
import './styles/partners.css'

const PARTNERSIMAGE = [
    {
        name: 'Forbes',
        image: 'https://raw.githubusercontent.com/nnoromiv/hestlabs/master/public/images/forbes.png',
        classname: 'p3',
    },
    {
        name: 'Web3ORB',
        image: 'https://pbs.twimg.com/profile_images/1589674346494431232/dK85kvgJ_400x400.jpg',
        classname: 'p8'
    },
    {
        name: 'Livecoinwatch',
        image: 'https://brandfetch.com/_next/image?url=https%3A%2F%2Fasset.brandfetch.io%2FidZvuvIAgb%2FidncvTidjS.jpeg&w=1920&q=75',
        classname: 'p2',
    },
    {
        name: 'Nomics',
        image: 'https://avatars.githubusercontent.com/u/32463793?s=200&v=4',
        classname: 'p1',
    },
    {
        name: 'Octium',
        image: 'https://raw.githubusercontent.com/nnoromiv/hestlabs/master/public/images/octium.png',
        classname: 'p9'
    },
    {
        name: 'Bi-Finance',
        image: 'https://theme.zdassets.com/theme_assets/14997702/222c7335abc7c55ee38d6ea660ac886fb253cf12.jpg',
        classname: 'p11'
    },
    {
        name: 'Xeggex',
        image: 'https://raw.githubusercontent.com/nnoromiv/hestlabs/master/public/images/xeggex.png',
        classname: 'p10'
    },
    {
        name: 'eXchangily',
        image: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/372f4f645cd6c92d9367',
        classname: 'p4'
    },  
    {
        name: 'HyperPay',
        image: 'https://raw.githubusercontent.com/nnoromiv/hestlabs/master/public/images/hyperpay.png',
        classname: 'p5'
    },
    // {
    //     name: 'Misses',
    //     image: '',
    //     classname: 'p6',
    // },
    {
        name: 'PayCools',
        image: 'https://raw.githubusercontent.com/nnoromiv/hestlabs/master/public/images/paycools.png',
        classname: 'p7'
    },
    
    {
        name: 'Galaxy labs',
        image: '',
        classname: 'p12'
    },
]

export const MyDivider = () => {
    return (
        <Divider className='li'/>
    )
}

const Partners = () => {
  return (
    <div className='partners'>
        <h1>Partners</h1>
        <div className='partners-list' >    
       {
        PARTNERSIMAGE.map(partnerimage => {
            return (            
                <>    
                <img key={partnerimage.classname}  alt='i1' src={partnerimage.image} />
                </>
            )
        } )
       }
       </div>
       <MyDivider />
    </div>
    
  )
}

export default Partners
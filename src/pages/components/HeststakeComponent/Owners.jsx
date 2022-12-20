import React from 'react'
import './styles/owners.css'
import StarIcon from '@mui/icons-material/Star';

const Owners = () => {
  return (
    <div className='owner'>
    <h1>The team:</h1>      
    <div className='team'>
        <div className='person'>
            <h1>John Doe</h1>
        </div>
        <StarIcon className='icon'/>
        <div className='person'>
            <h1>John Doe</h1>
        </div>
        <StarIcon className='icon'/>
        <div className='person'>
            <h1>John Doe</h1>
        </div>
        
        <div className='person'>
            <h1>John Doe</h1>
        </div>
        <StarIcon className='icon'/>
        <div className='person'>
            <h1>John Doe</h1>
        </div>
        <StarIcon className='icon'/>
        <div className='person'>
            <h1>John Doe</h1>
        </div>
    </div>
    </div>
  )
}

export default Owners

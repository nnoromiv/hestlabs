import React from 'react'
import './styles/owners.css'
import StarIcon from '@mui/icons-material/Star';

const OWNERS = [
    {
        name: 'Venomii',
        icon: <StarIcon className='icon'/>,
        link: ''
    },
    {
        name: 'Mexausus',
        icon: <StarIcon className='icon'/>,
        link: ''
    },
    {
        name: 'Phobee',
        icon: '',
        link: ''
    },
    {
        name: 'Diem_so',
        icon: <StarIcon className='icon'/>,
        link: ''
    },
    {
        name: 'Homberry',
        icon: <StarIcon className='icon'/>,
        link: ''
    },
    {
        name: 'theDev_IV',
        icon: '',
        link: ''
    },
]

const Owners = () => {
  return (
    <div className='owner'>
    <h1>The team:</h1>      
    <div className='team'>
        {
            OWNERS.map((owners) => {
                return (
                    <>
                    <div className='person' key={owners.name}>
                        <a href={owners.link} target="_blank" rel='noreferrer'>
                            <h1>{owners.name}</h1>
                        </a>
                    </div>
                    {owners.icon}
                    </>
                )
            })
        }
    </div>
    </div>
  )
}

export default Owners

import React from 'react'
import './styles/blockchainlist.css'
import { EthereumWhiteIcon, BinanceWhiteIcon, KusamaWhiteIcon, PolkadotWhiteIcon, PolygonWhiteIcon, SolanaWhiteIcon } from '../Icons'

const BLOCKCHAINLIST = [
    {
        classname: 'list',
        image: PolkadotWhiteIcon,
        partner: 'Polkadot'
    },
    {
        classname: 'list l1',
        image: KusamaWhiteIcon,
        partner: 'Kusama'
    },
    {
        classname: 'list l2',
        image: PolygonWhiteIcon,
        partner: 'Polygon'
    },
    {
        classname: 'list l3',
        image: SolanaWhiteIcon,
        partner: 'Solana'
    },
    {
        classname: 'list l4',
        image: EthereumWhiteIcon,
        partner: 'Ethereum'
    },
    {
        classname: 'list l5',
        image: BinanceWhiteIcon,
        partner: 'Binance'
    },
]

const Partnerslist = () => {
  return (
    <div className='blockchain-list'>
      {
        BLOCKCHAINLIST.map((blockchainlist, index) => {
            return (
                <div className={blockchainlist.classname} key={index}>
                <img alt='' src={blockchainlist.image} width='40px' />
                <p className='title'>{blockchainlist.partner}</p>
                </div>
            )
        })
      }
    </div>
  )
}

export default Partnerslist
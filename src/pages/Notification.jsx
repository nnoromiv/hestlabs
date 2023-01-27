import React from 'react'
import Alert from 'react-bootstrap/Alert';

const Notification = () => {
  return (
    <Alert variant='info' style={{ textAlign: 'center'}}>
        Hest Stake is now listed on <Alert.Link href='https://coinmarketcap.com/currencies/hest-stake'> CoinMarket Cap </Alert.Link> and <Alert.Link href='https://www.coingecko.com/en/coins/hest-stake'> CoinGecko </Alert.Link>
    </Alert>
  )
}

export default Notification

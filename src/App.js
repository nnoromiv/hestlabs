import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import Hestblockchain from './pages/Hestblockchain';
import Hestpay from './pages/Hestpay';
import Heststake from './pages/Heststake';
import Hestswap from './pages/Hestswap';
import Homepage from './pages/Homepage';
import Blockchain from './pages/Blockchains';
import Partners from './pages/Partners';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
    {/* A wrapper for the entire app. It is a component that is provided by the react-scroll-parallax
    library. It is used to provide the parallax effect to the entire app. */}
    <ParallaxProvider>
      <Homepage />
      <Blockchain />
      <Hestblockchain />
      <Hestpay />
      <Hestswap />
      <Heststake />
      <Partners />
      <Footer />
    </ParallaxProvider>
    </div>
  );
}

export default App;

import { ParallaxProvider } from 'react-scroll-parallax';
import Hestblockchain from './pages/Hestblockchain';
import Hestpay from './pages/Hestpay';
import Heststake from './pages/Heststake';
import Hestswap from './pages/Hestswap';
import Homepage from './pages/Homepage';
import Blockchain from './pages/Blockchains';
import Partners from './pages/Partners';
import Footer from './pages/Footer';
import Notification from './pages/Notification';

function Home() {
  return (
    <div className="Home">
    {/* A wrapper for the entire app. It is a component that is provided by the react-scroll-parallax
    library. It is used to provide the parallax effect to the entire app. */}
    <ParallaxProvider>
      <Notification />
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

export default Home;

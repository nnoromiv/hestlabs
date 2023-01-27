import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Whitepaper from './Whitepaper';
import Audit from './Audit';
import KYCReport from './KYCReport';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='whitepaper' element={<Whitepaper />} />
        <Route path='audit' element={<Audit />} />
        <Route path='kycreport' element={<KYCReport />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

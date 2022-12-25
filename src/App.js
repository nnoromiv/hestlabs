import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Whitepaper from './Whitepaper';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='whitepaper' element={<Whitepaper />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

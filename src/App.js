import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Strategies from './components/Strategies';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="strategies" element={<Strategies />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

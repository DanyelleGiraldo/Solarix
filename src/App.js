import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/solar/Header';
import Paneles from './components/solar/Paneles';
import LandingPage from './components/landingpage/LandingPage';

function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/solarix" element={<LandingPage />} />
        <Route path="/paneles" element={<Paneles />} />
      </Routes>
    </Router>
  );
}

export default App;

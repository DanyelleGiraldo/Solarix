import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Components/Header';
import Paneles from './components/solar/Paneles';
import RedesElectricas from './components/RedesElectricas/RedesElectricas';
import LandingPage from './components/landingpage/LandingPage';
import MovilidadElectrica from './components/MovilidadElectrica/MovilidadElectrica';

function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/solarix" element={<LandingPage />} />
        <Route path="/paneles" element={<Paneles />} />
        <Route path="/RedesElectricas" element={<RedesElectricas />} />
        <Route path="/MovilidadElectrica" element={<MovilidadElectrica />} />

      </Routes>
    </Router>
  );
}

export default App;

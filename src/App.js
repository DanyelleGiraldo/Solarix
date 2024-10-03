import './App.css';
import Header from './components/solar/Header';
import MainContent from './components/solar/MainContent';
import Servicios from './components/solar/Servicios';
import Pasos from './components/solar/Pasos';
import Sistemas from './components/solar/Sistemas';
import Contacto from './components/solar/Contacto';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <main className="bg-white">
        <MainContent />
        <Servicios />
        <Sistemas />
        <Pasos />
        <Contacto />
      </main>
    </div>
  );
}

export default App;

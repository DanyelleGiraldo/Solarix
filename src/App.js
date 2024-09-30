import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Servicios from './components/Servicios';
import Pasos from './components/Pasos';
import Sistemas from './components/Sistemas';
import Contacto from './components/Contacto';

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

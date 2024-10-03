import '../../App.css';
import Header from './Header';
import MainContent from './MainContent';
import Servicios from './Servicios';
import Pasos from './Pasos';
import Sistemas from './Sistemas';
import Contacto from './Contacto';

function Solar() {
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

export default Solar;

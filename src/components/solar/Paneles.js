import '../../App.css';
import Header from './Header';
import MainContent from './MainContent';
import Servicios from './Servicios';
import Pasos from './Pasos';
import Sistemas from './Sistemas';
import Contacto from './Contacto';
import contentData from './contenido/MainContentSolar'

function Solar() {
  return (
    <div className="font-sans">
      <Header />
      <main className="bg-white">
      <MainContent
        title={contentData.title}
        description1={contentData.description1}
        description2={contentData.description2}
        image={contentData.image}
      />
        <Servicios />
        <Sistemas />
        <Pasos />
        <Contacto />
      </main>
    </div>
  );
}

export default Solar;

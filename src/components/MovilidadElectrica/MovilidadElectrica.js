import '../../App.css';
import Header from '../Components/Header';
import MainContent from '../Components/MainContent';
import Servicios from '../Components/Servicios';
import Pasos from '../Components/Pasos';
import Sistemas from '../Components/Sistemas';
import Contacto from '../Components/Contacto';
import contentData from './contenido/MainContentMov';
import pasosData from './contenido/PasosDataMov';
import pasosTexts from './contenido/PasosTextsMov';
import servicesData from './contenido/ServicesDataMov';
import sistemasData from './contenido/SistemasDataMov'; 
import sistemasTexts from './contenido/SistemasTextMov';

function MovilidadElectrica() {
  return (
    <div className="font-sans">
      <Header />
      <main className="bg-white">
        <MainContent title={contentData.title} description1={contentData.description1} description2={contentData.description2} image={contentData.image}/>
        <Servicios servicesData={servicesData} /> 
        <Sistemas sistemasData={sistemasData} sistemasTexts={sistemasTexts} /> 
        <Pasos pasos={pasosData} pasosTexts={pasosTexts} />
        <Contacto />
      </main>
    </div>
  );
}

export default MovilidadElectrica;

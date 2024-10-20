import '../../App.css';
import Header from '../Components/Header';
import MainContent from '../Components/MainContent';
import Servicios from '../Components/Servicios';
import Pasos from '../Components/Pasos';
import Sistemas from '../Components/Sistemas';
import Contacto from '../Components/Contacto';
import contentData from './contenido/MainContentCom';
import pasosData from './contenido/PasosDataCom';
import pasosTexts from './contenido/PasosTextsCom';
import servicesData from './contenido/ServicesDataCom';
import sistemasData from './contenido/SistemasDataCom'; 
import sistemasTexts from './contenido/SistemasTextCom';

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

import '../../App.css';
import Header from './Header';
import MainContent from './MainContent';
import Servicios from './Servicios';
import Pasos from './Pasos';
import Sistemas from './Sistemas';
import Contacto from './Contacto';
import contentData from './contenido/MainContentSolar';
import pasosData from './contenido/PasosDataSolar';
import pasosTexts from './contenido/PasosDataTextSolar';
import servicesData from './contenido/ServicesDataSolar';
import sistemasData from './contenido/SistemasDataSolar'; // Asegúrate de importar los datos de sistemas
import sistemasTexts from './contenido/SistemasTextSolar'; // Asegúrate de importar los textos de sistemas

function Solar() {
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

export default Solar;

import './App.css';
import Menu from './componentes/Menu';
import Inicio from './componentes/Inicio';
import Vym from './componentes/Vym';
import Datos from './componentes/Datos';
import Planifica from './componentes/Planifica';
import Footer from './componentes/Footer';
import Imagenes from './componentes/Imagenes';
import Imagenes1 from './componentes/Imagenes1';
import Circuitos from './componentes/Circuitos';
import Atm from './componentes/Atm';
import Lugares from './componentes/Lugares';
import Navbar from './componentes/Navbar';
import Header from './componentes/Header';


import imagen1 from './imagenes/1.jpeg';
import imagen2 from './imagenes/im2.jpeg';
import imagen3 from './imagenes/im3.jpeg';
import imagen4 from './imagenes/im1.jpeg'
import imagen5 from './imagenes/12.jpeg'
import imagen6 from './imagenes/23.jpeg'
import imagen7 from './imagenes/24.jpeg'
import imagen8 from './imagenes/17.jpg'
import imagen9 from './imagenes/19.jpeg'
import imagen10 from './imagenes/10.jpeg'


import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false, 
    });
  }, []);


  return (
    <div className="App scope-one-regular">
      <Navbar />
      <Header />
      <Inicio />
      <Lugares />
      <Datos />
      <Imagenes 
        photo1={imagen1}
        alt1="imagen en el cerro"

        photo2={imagen8}
        alt2="imagen en el cerro"

        photo3={imagen6}
        alt3="imagen en el cerro"
      />
      <Circuitos />
      <Vym />
      <Planifica />
      <Atm />
      <Footer />
    </div>
  );
}

export default App;

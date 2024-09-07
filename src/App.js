import './App.css';
import Menu from './componentes/Menu';
import Inicio from './componentes/Inicio';
import Vym from './componentes/Vym';
import Datos from './componentes/Datos';
import Planifica from './componentes/Planifica';
import Footer from './componentes/Footer';
import Imagenes from './componentes/Imagenes';
import Circuitos from './componentes/Circuitos';
import Atm from './componentes/Atm';
import Lugares from './componentes/Lugares';

import imagen1 from './imagenes/1.jpeg';
import imagen2 from './imagenes/8.jpeg';
import imagen3 from './imagenes/15.jpeg';

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
      <Menu />
      <Inicio />
      <Lugares />
      <Imagenes 
        photo1={imagen1}
        alt1="imagen en el cerro"

        photo2={imagen2}
        alt2="imagen en el cerro"

        photo3={imagen3}
        alt3="imagen en el cerro"
      />

      <Datos />
      <Imagenes 
        photo1={imagen1}
        alt1="imagen en el cerro"

        photo2={imagen2}
        alt2="imagen en el cerro"

        photo3={imagen3}
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

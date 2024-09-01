import React from "react";
import logo from '../imagenes/logo22.png'

function Footer(){
    return(
        <footer class="footer mt-3 p-3 d-flex justify-content-evenly align-items-center">
            <div class="d-flex align-items-center">
            <img src={logo} alt="" width="80px" height="80px" class="mx-4" />
            <div>
                <a class="nav-link mb-3" aria-current="page" href="#home"><b>Volver al inicio</b></a>
                <a class="nav-link mb-2" href="#datos">Datos de interés</a>
                <a class="nav-link mb-2" href="#form">Planifica tu viaje</a>
                <a class="nav-link mb-2" href="#">Contacto</a>
            </div>
            </div>
            <div>
                <a href=""><i class="bi bi-instagram icon"></i></a>
                <a href=""><i class="bi bi-facebook icon"></i></a>
                <a href=""><i class="bi bi-whatsapp icon"></i></a>
            </div>
        </footer>
    )
}

export default Footer;
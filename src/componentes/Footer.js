import React from "react";
import logo from '../imagenes/logo22.png'

function Footer(){
    return(
        <footer class="footer mt-3 p-3 d-flex flex-column flex-md-row flex-lg-row flex-xl-row justify-content-evenly align-items-center">
            <div class="d-flex align-items-center">
            <img src={logo} alt="" width="80px" height="80px" class="mx-4" />
            <div>
                <a class="nav-link mb-3" aria-current="page" href="#"><b>Volver al inicio</b></a>
                <a class="nav-link mb-2" href="#datosdeinteres">Datos de interés</a>
                <a class="nav-link mb-2" href="#planificatuviaje">Planifica tu viaje</a>
                <a class="nav-link mb-2" href="#circuitos">Circuitos</a>
            </div>
            </div>
            <div className="d-flex flex-column align-items-center"> 
                <div className="p-3">
                    <h6 className="fw-bold">Visitá nuestras redes sociales!</h6>
                </div>
                <div>
                <a href="https://www.instagram.com/cerrotours/" target="_blank"><i class="bi bi-instagram icon"></i></a>
                <a href="https://www.facebook.com/people/CERRO-TOURS/100085263177912/"target="_blank"><i class="bi bi-facebook icon"></i></a>
                <a href="https://wa.me/+59891626636"><i class="bi bi-whatsapp icon"target="_blank"></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
import React from "react";
import imagen1c from "../imagenes/c1.jpeg"
import imagen2c from "../imagenes/c2.jpeg"
import imagen3c from "../imagenes/c3.jpeg"
import imagen4c from "../imagenes/c4.jpeg"

function Circuitos(){
    return(
        <div id="circuitos" class="circuitos d-flex flex-column align-items-center">
        <h2 class="text-center p-5" data-aos="fade-up">Conoce nuestros circuitos</h2>
        <div class="boxcir d-flex flex-column flex-md-column flex-lg-row flex-xl-row justify-content-center  ">
            <div class="d-flex flex-column align-items-center zindexc w-75 mt-5 ">
                <img src={imagen1c} alt="imagen1c" width={280} />
                <h5 class="zindexc mt-3">Experiencerr</h5>
                <h6 class="text-center w-100 zindexc mt-2 p-4">
                    Un circuito ideal para quienes viajan solos o en grupo y desean conocer y explorar lo más destacado del Cerro de Montevideo en poco tiempo.
                </h6>
                <button type="submit" class="p-1 price rounded"> <a href="https://wa.me/+59891626636" target="_blank"> Consultar precio</a></button>
            </div>
            <div class="d-flex flex-column align-items-center zindexc w-75 mt-5">
                <img src={imagen3c} alt="imagen1c" width={280} />
                <h5 class="zindexc mt-3">Paisaje Oeste Natural</h5>
                <h6 class="text-center w-100 zindexc mt-2 p-4">
                    Este Tour ganador del Sello Montevideo + verde, es un verdadero taller de naturaleza en el que recorremos distintos puntos del Oeste, empezando por el Cerro haciendo avistamiento de aves en el parque Débora Céspedes e interpretamos la relación de las industrias en las costas y la dinámica costera poniendo énfasis en la importancia del medio ambiente.
                </h6>
                <button type="submit" class="p-1 price rounded"> <a href="https://wa.me/+59891626636" target="_blank"> Consultar precio</a></button>
            </div>
            <div class="d-flex flex-column align-items-center zindexc w-75 mt-5">
                <img src={imagen2c} alt="imagen1c" width={280} />
                <h5 class="zindexc mt-3">Paisaje Cultural</h5>
                <h6 class="text-center w-100 zindexc mt-2 p-4">
                    Un recorrido de 3 hs por exposiciones de arte a cielo abierto y cerradas, como la muestra de Eduardo Labraga en la Casa de la Pólvora y la de Gurvich en el FLorencio Sanchez. Te harán vibrar todos los sentidos y expresiones de un barrio a través del arte.
                </h6>
                <button type="submit" class="p-1 price rounded"> <a href="https://wa.me/+59891626636" target="_blank"> Consultar precio</a></button>
            </div>
            <div class="d-flex flex-column align-items-center zindexc w-75 mt-5">
                <img src={imagen4c} alt="imagen1c" width={280} />
                <h5 class="zindexc mt-3">El camino del inmigrante</h5>
                <h6 class="text-center w-100 zindexc mt-2 p-4">
                    El Cerro de Montevideo fue creado en 1834 como barrio satélite para albergar la inmimgración que iba a ser muy numerosa y lo fue, por eso las calles llevan los nombres de todas las nacionalidades que provenían. Este tour recrea como fue la vida de estos inmigrantes en el Cerro, pasando por su trabajo en los frigoríficos, visitamos el ex Artigas, hoy PTI Cerro, clubes sociales como el Lituano, hasta las distintas formas de construir las casillas de chapa.
                 </h6>
                 <button type="submit" class="p-1 price rounded"> <a href="https://wa.me/+59891626636" target="_blank"> Consultar precio</a></button>
            </div>
        </div>
    </div>
    
    )
}

export default Circuitos;
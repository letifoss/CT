import React from "react";
import logomv from "../imagenes/mv.jpeg"

function Datos(){
    return(
    <section id="datosdeinteres" class="content d-flex flex-column justify-content-center align-items-center">
        <h2 class="mt-5 text-center" data-aos="fade-up" >Datos de interés</h2>
        <div class="d-flex flex-column flex-md-row flex-lg-row flex-xl-row justify-content-center mt-5 mb-5 flex-wrap"data-aos="fade-up"  >
            <div class="boxinfo1 m-2"><p class="p-3 w-md-75 mt-3 text-center">En 2024, la empresa es reconocida por la División de Turismo de la IMM, con el sello <b>Montevideo más Verde</b>, así como <b><i>empresa turística reconocida por prácticas sostenibles</i></b></p></div>
            <div class="boxinfo1 m-2"><p class="p-3 w-md-75 mt-3 text-center">Ganamos el fondo DTI en la categoría <b>turismo sostenible</b> 2024</p></div>
            <div class="boxinfo1 m-2"><p class="p-3 w-md-75 mt-3 text-center">Formamos parte de la <b>ATM (Asociación Turística de Montevideo)</b> y nuestra empresa está registrada en Mintur 92</p></div>
        </div>
    </section>

    )
}

export default Datos;
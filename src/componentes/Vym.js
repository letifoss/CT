import React from "react";
import '../App.css';
function Vym (){
    return(
    <section id="vym" className="content d-flex flex-column justify-content-center">
        <h2 className="mt-5 text-center" data-aos="fade-up" >Visión y Misión </h2> 
        <div className=" d-flex flex-column flex-md-row flex-lg-row flex-xl-row justify-content-center align-items-center" data-aos="fade-up" >
        <div className="d-flex flex-column justify-content-start mt-5 boxinfo2 m-4">
            <h4 className="mt-2 text-center">Visión</h4>
            <p className="p-3 w-md-75 mt-3 text-center "> Proponemos un escenario de fruto posible para la comunidad local a través de la planificación turística, de generar espacios de cuidados y de generar recursos para la conservación del medio.</p>
            <p className="p-3 w-md-75 mt-3 text-center ">Convertir al Cerro de Montevideo en un barrio turístico, pero sobre todo en un modelo de turismo sostenible que cumpla los requerimientos de la OMT y la UNESCO.</p>
        </div>
        <div className="d-flex flex-column justify-content-start mt-5 boxinfo2 m-4" >
            <h4 className="mt-2 text-center">Misión</h4>
            <p className=" w-md-75 mt-3 text-center">Desarrollar la actividad turística de manera responsable, asegurando así para las futuras generaciones la conservación del patrimonio natural y cultural tangible e intangible.</p>
            <p className=" w-md-75 mt-3 text-center">Revalorización de espacios con potencial turístico para que puedan convertirse en un recurso turístico.</p>
            <p className=" w-md-75 mt-3 text-center">Trabajar en una nueva cultura de visitantes comprometidos con el medio ambiente y la comunidad local.</p>
        </div>
        </div>
    </section>
    )
}

export default Vym;
import React from "react";
import '../App.css';

function Inicio() {
  return (
    <section id="home" className="content home d-flex flex-column align-items-center" >
      <div className="d-flex flex-column flex-md-column flex-lg-row flex-xl-row justify-content-evenly align-items-center align-items-md-center align-items-lg-start align-items-xl-start mt-5" style={{ gap: '40px', width: '100%' }} data-aos="fade-up" >
        <div className="d-flex flex-column align-items-center mt-5" style={{ width: '300px' }}  >
          <p>
            <button
              className="buttinfo d-flex flex-column align-items-center"
              type="button"
            >
              <h2>¿Qué es Cerro tours?</h2>
              <i class="bi bi-arrow-down-circle iconarrow" ></i>
            </button>
          </p>
          <div className="collapse-container mb-5">
              <div className="boxcol p-3">
                <p className="w-100 text-center mt-4">Somos una pequeña empresa local de turismo <b>sostenible</b>, que realiza excursiones en el Cerro de Montevideo.
                  Viajá con nosotros de forma segura y ayudá a la comunidad local!</p>
              </div>
          </div>
        </div>

        <div className="d-flex flex-column align-items-center mt-5" style={{ width: '300px' }}>
          <p>
            <button
              className="buttinfo d-flex flex-column align-items-center"
              type="button"
            >
              <h2>¿Por qué somos una empresa sostenible?</h2>
              <i class="bi bi-arrow-down-circle iconarrow"></i>
            </button>
          </p>
          <div className="collapse-container mb-5">
              <div className="boxcol p-3">
                <p className="w-75 mt-3 text-left">Porque es el modelo de turismo que elegimos para desarrollar la actividad turística en nuestro barrio, a través del cual podemos recuperar y preservar la cultura local, preservar el patrimonio cultural y natural, impulsando el desarrollo económico por medio de la economía circular.</p>
              </div>
            </div>
          </div>

        </div>
        <div className="video">
            <lite-youtube videoid="yQcOuZbxMl4"data-aos="fade-up"></lite-youtube>
          </div>
    </section>
  );
}

export default Inicio;

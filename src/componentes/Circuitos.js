import React from "react";
import imagen1c from "../imagenes/c1.jpeg"
import imagen2c from "../imagenes/c2.jpeg"
import imagen3c from "../imagenes/c3.jpeg"
import imagen4c from "../imagenes/c4.jpeg"

function Circuitos(){
    return(
        <div id="circuits" className="circuitos">
        <h2 class="mt-5 text-center" data-aos="fade-up" >Conocé nuestros circuitos</h2>
        <div className="d-flex flex-column align-items-center mt-5 w-50" >
        <div id="carouselExampleIndicators" class="carousel slide carousel-fade w-75 mb-5" >
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src={imagen1c}  class="d-block w-100" alt="" width={300}/>
            </div>
            <div class="carousel-item">
            <img src={imagen2c} class="d-block w-100" alt=""width={300} />
            </div>
            <div class="carousel-item">
            <img src={imagen3c} class="d-block w-100" alt="" width={300}/>
            </div>
            <div class="carousel-item">
            <img src={imagen4c} class="d-block w-100" alt="" width={300}/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
        </div>
        </div>
    )
}

export default Circuitos;
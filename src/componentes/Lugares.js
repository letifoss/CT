import React from "react";
import img1 from "../imagenes/l1.jpg"
import img2 from "../imagenes/l2.jpeg"
import img3 from "../imagenes/l3.jpeg"
import img4 from "../imagenes/l4.jpeg"
import img5 from "../imagenes/l5.jpg"
import img6 from "../imagenes/l6.jpg"
import img7 from "../imagenes/l8.jpeg"
import img8 from "../imagenes/l9.jpg"


function Lugares(){
    return(
        <div className="d-flex justify-content-center w-100">
        <div className="lugares" data-aos="fade-up">
        <h2 className="text-center mt-4 zindex text-white w-75" >Lugares que podes conocer</h2>
        <div id="carouselExampleCaptions" class="carousel slide places">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={img1} class="d-block w-100 imgcar" alt="..." />
                <div class="carousel-caption d-md-block">
                    <h5>First slide label</h5>
                </div>
                </div>
                <div class="carousel-item">
                <img src={img2} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-md-block">
                    <h5>Second slide label</h5>
                </div>
                </div>
                <div class="carousel-item">
                <img src={img3} class="d-block w-100" alt="..." /> 
                <div class="carousel-caption d-md-block">
                    <h5>Third slide label</h5>
                </div>
                </div>
                <div class="carousel-item">
                <img src={img4} class="d-block w-100" alt="..." /> 
                <div class="carousel-caption d-md-block">
                    <h5>Third slide label</h5>
                </div>
                </div>
                <div class="carousel-item">
                <img src={img5} class="d-block w-100" alt="..." /> 
                <div class="carousel-caption d-md-block">
                    <h5>Third slide label</h5>
                </div>
                </div>
                <div class="carousel-item">
                <img src={img6} class="d-block w-100" alt="..." /> 
                <div class="carousel-caption d-md-block">
                    <h5>Third slide label</h5>
                </div>
                </div>
                <div class="carousel-item">
                <img src={img7} class="d-block w-100" alt="..." /> 
                <div class="carousel-caption d-md-block">
                    <h5>Third slide label</h5>
                </div>
                </div>
                <div class="carousel-item">
                <img src={img8} class="d-block w-100" alt="..." /> 
                <div class="carousel-caption d-md-block">
                    <h5>Third slide label</h5>
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </div>
        </div>
    )
}

export default Lugares;
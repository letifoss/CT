import React from "react";

import header1 from '../imagenes/header.jpeg';
import header2 from '../imagenes/header2.jpeg';
import header3 from '../imagenes/header3.jpeg';

function Header (){
    return(
        <div className="w-100">
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src={header1} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={header2}class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={header3} class="d-block w-100" alt="..."/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
            </div>
        </div>

    )
}

export default Header;
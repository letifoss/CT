import React from "react";

import header1 from '../imagenes/header.jpeg';
import header2 from '../imagenes/header2.jpeg';
import header3 from '../imagenes/header3.jpeg';

function Header (){
    return(
         <div id="carouselExampleAutoplaying" class="carousel slide carouselheader" data-bs-ride="carousel">
        <div class="carousel-inner cinnerh">
            <div class="carousel-item active" data-bs-interval="1000">
            <img src={header1} class=" w-100 " alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={header2}class=" w-100" alt="..."data-bs-interval="1000"/>
            </div>
            <div class="carousel-item">
            <img src={header3} class=" w-100" alt="..."/>
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


    )
}

export default Header;
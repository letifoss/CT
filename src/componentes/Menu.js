import React from "react";
import '../App.css';



function Menu (){
    return(
    <header className="header position-relative">
        <div className="title ">
        <h1 className="position-absolute">¿Querés conocer el Cerro de Montevideo?</h1>
        <button><a href="#planificatuviaje">MÁS INFORMACIÓN</a></button>
    </div>
    </header>
    )
}

export default Menu;
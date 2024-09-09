import React from "react";
import '../App.css';
import logo from '../imagenes/logo22.png'


function Menu (){
    return(
    <header className="header position-relative">
    <nav className="navbar navbar-expand-lg navbar-light position-absolute">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" > <img src={logo} alt="logo principal cerrotours" width="50px" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#inicio">Sobre nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#datosdeinteres">Datos de interés</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#circuitos">Circuitos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#planificatuviaje">Planifica tu viaje</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="title ">
        <h1 className="position-absolute">¿Querés conocer el Cerro de Montevideo?</h1>
        <button><a href="#form">MÁS INFORMACIÓN</a></button>
    </div>
    </header>
    )
}

export default Menu;
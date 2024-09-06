import React from "react";
import atm from "../imagenes/atm.jpeg"

function Atm(){
    return(
        <div className="atm" data-aos="fade-right">
        <h5>CON EL RESPALDO DE:</h5>
        <img src={atm} alt="" width="300px" className="m-3" />
        </div>
    )
}

export default Atm;
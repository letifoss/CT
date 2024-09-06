import React from "react";
import atm from "../imagenes/atm.jpeg"
import UN from "../imagenes/UN.jpeg"
import desc from "../imagenes/desc.jpeg"

function Atm(){
    return(
        <div className="atm">
        <p>CON EL RESPALDO DE:</p>
        <img src={atm} alt="" width="200px" className="m-3" />
        <img src={desc} alt="" width="200px" className="m-3" />
        <img src={UN} alt="" width="200px" className="m-3" />
        </div>
    )
}

export default Atm;
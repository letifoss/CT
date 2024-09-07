import React from "react";
import img1 from "../imagenes/9.jpeg"

function Lugares(){
    return(
        <div className="lugares w-100">
        <h2 className="text-center mt-4">Lugares que podes conocer</h2>
        <div className="d-flex flex-row justify-content-center flex-wrap">
            <div className="d-flex flex-column align-items-center p-2">
                <img src={img1} alt="" width={350} />
                <p className="p-2">Nombre del lugar</p>
            </div>
            <div className="d-flex flex-column align-items-center p-2">
                <img src={img1} alt="" width={350} />
                <p className="p-2">Nombre del lugar</p>
            </div>
            <div className="d-flex flex-column align-items-center p-2">
                <img src={img1} alt="" width={350} />
                <p className="p-2">Nombre del lugar</p>
            </div>
            <div className="d-flex flex-column align-items-center p-2">
                <img src={img1} alt="" width={350} />
                <p className="p-2">Nombre del lugar</p>
            </div>
            <div className="d-flex flex-column align-items-center p-2">
                <img src={img1} alt="" width={350} />
                <p className="p-2">Nombre del lugar</p>
            </div>
            <div className="d-flex flex-column align-items-center p-2">
                <img src={img1} alt="" width={350} />
                <p className="p-2">Nombre del lugar</p>
            </div>
            <div className="d-flex flex-column align-items-center p-2">
                <img src={img1} alt="" width={350} />
                <p className="p-2">Nombre del lugar</p>
            </div>
            <div className="d-flex flex-column align-items-center p-2">
                <img src={img1} alt="" width={350} />
                <p className="p-2">Nombre del lugar</p>
            </div>
        </div>
        </div>
    )
}

export default Lugares;
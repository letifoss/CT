import React from "react";
import img1 from "../imagenes/9.jpeg"

function Lugares(){
    return(
        <div className="d-flex justify-content-center">
        <div className="lugares" data-aos="fade-up">
        <h2 className="text-center mt-4 zindex text-white">Lugares que podes conocer</h2>
        <div className="d-flex flex-row justify-content-center flex-wrap">
            <div className="d-flex flex-column align-items-center p-2 zindex">
                <img src={img1} alt="" width={350} />
                <p className="p-2 text-white">Nombre del lugar</p>
            </div>
            <div className="d-flex flex-column align-items-center p-2 zindex">
                <img src={img1} alt="" width={350} />
                <p className="p-2 text-white">Nombre del lugar</p>
            </div>
            <div className="d-flex flex-column align-items-center p-2 zindex">
                <img src={img1} alt="" width={350} />
                <p className="p-2 text-white">Nombre del lugar</p>
            </div>
            <div className="d-flex flex-column align-items-center p-2 zindex">
                <img src={img1} alt="" width={350} />
                <p className="p-2 text-white">Nombre del lugar</p>
            </div>
            <div className="d-flex flex-column align-items-center p-2 zindex">
                <img src={img1} alt="" width={350} />
                <p className="p-2 text-white">Nombre del lugar</p>
            </div>
            <div className="d-flex flex-column align-items-center p-2 zindex">
                <img src={img1} alt="" width={350} />
                <p className="p-2 text-white">Nombre del lugar</p>
            </div>
            <div className="d-flex flex-column align-items-center p-2 zindex">
                <img src={img1} alt="" width={350} />
                <p className="p-2 text-white">Nombre del lugar</p>
            </div>
            <div className="d-flex flex-column align-items-center p-2 zindex">
                <img src={img1} alt="" width={350} />
                <p className="p-2 text-white">Nombre del lugar</p>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Lugares;
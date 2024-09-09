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
        <div className="d-flex justify-content-center">
        <div className="lugares" data-aos="fade-up">
        <h2 className="text-center mt-4 zindex text-white w-75" >Lugares que podes conocer</h2>
        <div className="d-flex flex-row justify-content-center flex-wrap">
            <div className="d-flex flex-column align-items-center p-2 zindex">
                <img src={img1} alt="" width={320} height={350} />
                <p className="p-2 text-white">Fortaleza Gral. Artigas</p>
            </div>
            <div className="d-flex flex-column align-items-center p-2 zindex">
                <img src={img2} alt="" width={320} height={350}/>
                <p className="p-2 text-white">PTI  Cerro</p>
            </div>
            <div className="d-flex flex-column align-items-center p-2 zindex">
                <img src={img3} alt="" width={320}height={350} />
                <p className="p-2 text-white">Mural del Troccoli</p>
            </div>
            <div className="d-flex flex-column align-items-center p-2 zindex">
                <img src={img4} alt="" width={320} height={350}/>
                <p className="p-2 text-white">Plaza del Inmigrante</p>
            </div>
            <div className="d-flex flex-column align-items-center p-2 zindex">
                <img src={img5} alt="" width={320} height={350}/>
                <p className="p-2 text-white">CC.Casa de la Polvora</p>
            </div>
            <div className="d-flex flex-column align-items-center p-2 zindex">
                <img src={img6} alt="" width={320} height={350} />
                <p className="p-2 text-white w-100 text-center">Memorial de los Detenidos Desaparecidos</p>
            </div>
            <div className="d-flex flex-column align-items-center p-2 zindex">
                <img src={img7} alt="" width={320} height={350}/>
                <p className="p-2 text-white">Casa del señor de los Azulejos</p>
            </div>
            <div className="d-flex flex-column align-items-center p-2 zindex">
                <img src={img8} alt="" width={320}height={350} />
                <p className="p-2 text-white">Teatro Florencio Sanchez</p>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Lugares;
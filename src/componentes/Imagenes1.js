import React from "react";

function Imagenes1(props) {
    return (
        <section className="images d-flex flex-column flex-md-column flex-lg-row flex-xl-row justify-content-center align-items-center flex-wrap" data-aos="fade-up"  >
                <div className="d-flex flex-column align-items-center">
                    <img src={props.photo1} alt={props.alt1} width="370px" height="380px" className="m-3" />
                    <p className="w-75 text-center">Asociación Cultural Uruguay Lituania</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <img src={props.photo2} alt={props.alt2} width="370px"height="380px"className="m-3" />
                    <p className="w-75 text-center">Federación Obrera de la industria de la carne</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <img src={props.photo3} alt={props.alt3} width="370px" height="380px"className="m-3"/>
                    <p className="text-center">Casa de la pólvora</p>
                </div>
        </section>
    );
}

export default Imagenes1;

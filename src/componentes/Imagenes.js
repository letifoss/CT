import React from "react";

function Imagenes(props) {
    return (
        <section className="images d-flex flex-column flex-md-row flex-lg-row flex-xl-row justify-content-center align-items-center flex-wrap" data-aos="fade-up"  >
                <img src={props.photo1} alt={props.alt1} width="380px" className="m-3" />
                <img src={props.photo2} alt={props.alt2} width="380px"className="m-3" />
                <img src={props.photo3} alt={props.alt3} width="380px" className="m-3"/>
        </section>
    );
}

export default Imagenes;

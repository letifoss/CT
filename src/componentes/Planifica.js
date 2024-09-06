import React from "react";
import { useState } from "react";

function Planifica(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [date, setDate] = useState('');
    const [people, setPeople] = useState('');
    const [message, setMessage] = useState('');
   
    
    const buildWhatsAppLink = () => {
        const baseURL = "https://wa.me/+59894451482";
        return `${baseURL}?text=Hola,%20mi%20nombre%20es%20${encodeURIComponent(name)}.%0ATotal%20de%20personas:%20${encodeURIComponent(people)}.%0AQuisieramos%20viajar%20en%20la%20siguiente%20fecha:%20${encodeURIComponent(date)}.%0ANúmero%20de%20contacto:%20${encodeURIComponent(tel)}.%0AMensaje%20opcional:%20${encodeURIComponent(message)}`;
    };
    

    const handleSendToWhatsApp = (e) => {
        e.preventDefault(); 
        const whatsappLink = buildWhatsAppLink();
        window.open(whatsappLink, '_blank');
    };

    return(
        <section id="form" class="content forms d-flex flex-column" >
        <h2 class="mt-5 mb-5 text-center" data-aos="fade-up" >Planifica tu viaje!</h2>
        <div class="d-flex flex-column flex-md-row flex-lg-row flex-xl-row justify-content-center justify-content-md-center justify-content-lg-center mt-3" >
            <div class="d-flex flex-column align-items-center" >
            <form action="" class="d-flex flex-column p-5 p-md-4 p-lg-4 p-xl-4 " onSubmit={handleSendToWhatsApp} >
                <input type="text" placeholder="Nombre completo" class="p-1 m-1" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="email" placeholder="Correo electrónico"class="p-1 m-1 " value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="tel" placeholder="Teléfono de contacto"class="p-1 m-1" value={tel} onChange={(e) => setTel(e.target.value)} />
                <label for="" class="p-1 ml-1 dat">Fecha de interés <input type="date" placeholder="Fecha de interés" class="m-1 p-1" value={date} onChange={(e) => setDate(e.target.value)}/></label>
                <input type="number" placeholder="Cantidad de personas"class="p-1 m-1" value={people} onChange={(e) => setPeople(e.target.value)}/>
                <textarea type="text" placeholder="Mensaje (opcional)" rows="5"class="p-1 m-1" value={message} onChange={(e) => setMessage(e.target.value)} />
            </form>
            <button type="submit" class="p-1 buttonsub rounded" onClick={handleSendToWhatsApp}>Enviar</button>
            </div>
        <div class="d-flex flex-column align-items-center mt-5 p-5">
            <p className="text-white fs-5">Contáctanos para más información!</p>
            <p class="text-white fs-5"> <a href="https://wa.me/+59891626636"><i class="bi bi-whatsapp icon m-2"></i></a>091 626 636</p>
        </div>
        </div>
        </section>

    )
}

export default Planifica;
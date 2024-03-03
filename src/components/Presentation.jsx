import React from 'react'
import photo from '@images/foto.png'

const Presentation = () => {
  return (
    <>
        <div className="yo">
            <div className="yo__sideCard">
                <img className="foto" src={photo} alt=""></img>
                <div >
                    <h2 >Full Stack Developer</h2>
                    <div className='yo__locationContainer'>
                        <img src="../assets/images/icons/placeholder.png" className="imageLocation" alt="" />
                        <span>Cali, colombia</span>
                    </div>
                    {/* <span className="ubicacion"></span> */}
                    <h2 className="yo__contactMe--title"><b>Contactame:</b></h2> 
                    <div className="referencias">
                        {/* <li> */}
                        <a href="https://www.linkedin.com/in/daniel-salazar-mu%C3%B1oz-b54077a8/"><span className="linkedin"></span></a>
                        {/* </li> */}
                        {/* <li> */}
                        <a href="https://github.com/danielsalazr"> <span className="github"></span></a>
                        {/* </li>
                        <li> */}
                        <a href="mailto:danielsalazr@hotmail.com"> <span className="email"></span></a>
                        {/* </li> */}
                    </div>
                </div>

            </div>
            <div className="content">
                <h2 className="mi" id="mi">Sobre mi:</h2>
                <label className="presentacion" for="">
                Soy Full Stack Developer con background en Ingeniería electrónica, tengo experiencia desarrollando aplicaciones con Django, React,
                y Bootstrap, he desarrollado proyectos para presentar datos y hacer tracking en procesos
                industriales, sistemas de riego para plantaciónes, despacho de mercancia,solicitud de alimentacion en empresas, asignacion de codigos de barras, envio masivo de correos y mas.
                me gustaria trabajar como Full Stack developer en una empresa de desarrollo. Soy autodidacta, mantengo en formación constante, me entusiasma experimentar e
                implementar ideas, trabajar
                en equipo, interactuar con personas y compartir mis cononcimientos para crecer y crear cosas innovadoras.
                {/* para convertirlas en grandes experiencias para la usabilidad, accesibilidad y
                presentación de
                datos mediante el consumo de API’s. */}
                </label>
            </div>
        </div>
    </>
  )
}

export default Presentation

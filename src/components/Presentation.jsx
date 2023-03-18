import React from 'react'
import photo from '@images/foto.png'

const Presentation = () => {
  return (
    <>
        <div className="yo">
            <div className="yo__sideCard">
                <img className="foto" src={photo} alt=""></img>
                <div>
                <h2 >Frontend Developer</h2>
                
                <ul className="referencias">
                    <b>Contactame:</b> 
                    <li><span>Cali, colombia</span> <span className="ubicacion"></span></li>
                    <li><a href="https://www.linkedin.com/in/daniel-salazar-mu%C3%B1oz-b54077a8/">Linked In <span
                        className="linkedin"></span></a></li>
                    <li><a href="https://github.com/danielsalazr">GitHub <span className="github"></span></a></li>
                    <li><a href="mailto:danielsalazr@hotmail.com">E-Mail <span className="email"></span></a></li>
                </ul>
                </div>

            </div>
            <div className="content">
                <h2 className="mi" id="mi">Sobre mi:</h2>
                <label className="presentacion" for="">
                Soy Frontend Developer con background en Ingeniería electrónica, tengo experiencia en HTML, CSS, React,
                Bootstrap y WebPack, he desarrollado proyectos para presentar datos y hacer tracking en procesos
                industriales
                y un sistema de riego en de una plantación. Quiero trabajar como Frontend en una empresa de
                desarrollo con
                aplicaciones reactivas, Soy autodidacta en formación constante, me entusiasma experimentar e
                implementar ideas
                con mi equipo para convertirlas en grandes experiencias para la usabilidad, accesibilidad y
                presentación de
                datos mediante el consumo de API’s.
                </label>
            </div>
        </div>
    </>
  )
}

export default Presentation

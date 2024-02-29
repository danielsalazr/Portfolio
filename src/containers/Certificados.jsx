import React from 'react'


import diploma_dom from '../assets/images/certificados/diploma-dom.jpg'
import diploma_javascript_poo from '../assets/images/certificados/diploma-javascript-poo.jpg'
import diploma_python_profesional from '../assets/images/certificados/diploma-python-profesional.jpg'
import diploma_animaciones_css from '../assets/images/certificados/diploma-animaciones-css.jpg'
import diploma_api from '../assets/images/certificados/diploma-api.jpg'
import diploma_bootstrap from '../assets/images/certificados/diploma-bootstrap.jpg'
import diploma_git_github from '../assets/images/certificados/diploma-git-github.jpg'
import diploma_seguridad_informatica from '../assets/images/certificados/diploma-seguridad-informatica.jpg'
import diploma_trasnformaciones_transiciones_css from '../assets/images/certificados/diploma-transformaciones-transiciones-css.jpg'
import diploma_django from '../assets/images/certificados/diploma-django.jpg'
import diploma_backend_js from '../assets/images/certificados/diploma-backend-js.jpg'
import diploma_webpack from '../assets/images/certificados/diploma-webpack.jpg'
import diploma_react_17 from '../assets/images/certificados/diploma-react-17.jpg'
import diploma_taller_carrera from '../assets/images/certificados/diploma-taller-carrera.jpg'
import diploma_html_practico from '../assets/images/certificados/diploma-html-practico.jpg'
import diploma_frontend_developer from '../assets/images/certificados/diploma-frontend-developer.jpg'
import diploma_ecmascript_6 from '../assets/images/certificados/diploma-ecmascript-6.jpg'
import diploma_programacion_estructurada from '../assets/images/certificados/diploma-programacion-estructurada.jpg'
import diploma_iot from '../assets/images/certificados/diploma-iot.jpg'
import diploma_seguridad_empresa from '../assets/images/certificados/diploma-seguridad-empresa.jpg'
import diploma_terminal from '../assets/images/certificados/diploma-terminal.jpg'
import diploma_bases_de_datos from '../assets/images/certificados/diploma-bases-de-datos.jpg'
import diploma_flexbox_css_grid from '../assets/images/certificados/diploma-flexbox-css-grid.jpg'
import diploma_css_grid from '../assets/images/certificados/diploma-css-grid.jpg'
import diploma_portafolios from '../assets/images/certificados/diploma-portafolios.jpg'
import diploma_flujo_c from '../assets/images/certificados/diploma-flujo-c.jpg'
import diploma_express_js from '../assets/images/certificados/diploma-express-js.jpg'
import diploma_postgresql from '../assets/images/certificados/diploma-postgresql.jpg'
import diploma_mobile_first from '../assets/images/certificados/diploma-mobile-first.jpg'
import diploma_lenguaje_c from '../assets/images/certificados/diploma-lenguaje-c.jpg'
import diploma_fundamentos_arduino from '../assets/images/certificados/diploma-fundamentos-arduino.jpg'
import diploma_funciones_c from '../assets/images/certificados/diploma-funciones-c.jpg'

function Certificados() {

    const [busqueda, setBusqueda]= React.useState("")
    const [certs, setCerts]= React.useState([])
    const [loading, setLoading]= React.useState(false)
    
    
    const certificaciones = [
        {
            nombre: "Curso de Manipulacon del DOM",
            categoria: "Javascript",
            imagen : diploma_dom,
        },
        {
            nombre: "Programacion orientada a objetos con javascript",
            categoria: "Javascript",
            imagen : diploma_javascript_poo,
        },
        {
            nombre: "Curso profesional de Python",
            categoria: "Python",
            imagen : diploma_python_profesional,
        },
        {
            nombre: "Curso de Animaciones con CSS",
            categoria: "CSS",
            imagen : diploma_animaciones_css,
        },
        {
            nombre: "Curso de Consumo de api rest con javascript",
            categoria: "Javascript",
            imagen : diploma_api,
        },
        {
            nombre: "Curso de Bootstrap",
            categoria: "CSS",
            imagen : diploma_bootstrap,
        },
        {
            nombre: "Curso de Git y Github",
            categoria: "Git",
            imagen : diploma_git_github,
        },
        {
            nombre: "Curso de Seguridad e Informatica",
            categoria: "Seguridad e Informatica",
            imagen : diploma_seguridad_informatica,
        },
        {
            nombre: " Curso Transformaciones y transiciones css",
            categoria: "Transformaciones, transiciones css",
            imagen : diploma_trasnformaciones_transiciones_css,
        },
        {
            nombre: "Curso de Django",
            categoria: "Django",
            imagen : diploma_django,
        },
        {
            nombre: "Curso de Backend",
            categoria: "Backend",
            imagen : diploma_backend_js,
        },
        {
            nombre: "Curso de webpack",
            categoria: "webpack",
            imagen : diploma_webpack,
        },
        {
            nombre: "Curso de react",
            categoria: "react 17",
            imagen : diploma_react_17,
        },
        {
            nombre: "Curso de Carrera",
            categoria: "Taller Carrera",
            imagen : diploma_taller_carrera,
        },
        {
            nombre: "Curso de Html",
            categoria: "html",
            imagen : diploma_html_practico,
        },
        {
            nombre: "Curso de Frontend",
            categoria: "frontend",
            imagen : diploma_frontend_developer,
        },
        {
            nombre: "Curso de ecmascript",
            categoria: "ecmascript 6",
            imagen : diploma_ecmascript_6,
        },
        {
            nombre: "Curso de Programacion estructurada",
            categoria: "Programacion estructurada",
            imagen : diploma_programacion_estructurada,
        },
        {
            nombre: "Curso Induccion a la Terminal",
            categoria: "Terminal",
            imagen : diploma_terminal,
        },
        {
            nombre: "Curso Induccion a la IoT",
            categoria: "IoT",
            imagen : diploma_iot,
        },
        {
            nombre: "Curso de Seguridad para Empresas ",
            categoria: "Seguridad",
            imagen : diploma_seguridad_empresa,
        },
        {
            nombre: "Curso de Bases de Datos",
            categoria: "Datos",
            imagen : diploma_bases_de_datos,
        },
        {
            nombre: "Curso de Flexbox css grid",
            categoria: "Css",
            imagen : diploma_flexbox_css_grid,
        },
        {
            nombre: "Curso de css grid",
            categoria: "Css",
            imagen : diploma_css_grid,
        },
        {
            nombre: "Curso de creacion de portafolio y CV",
            categoria: "CV",
            imagen : diploma_portafolios,
        },
        {
            nombre: "Curso de Flujo c",
            categoria: "C",
            imagen : diploma_flujo_c,
        },
        {
            nombre: "Curso de Express JS",
            categoria: "JS",
            imagen : diploma_express_js,
        },
        {
            nombre: "Curso de postgresql",
            categoria: "Postgresql",
            imagen : diploma_postgresql,
        },
        {
            nombre: "Curso de Mobile First",
            categoria: "Mobile First",
            imagen : diploma_mobile_first,
        },
        {
            nombre: "Curso de Lenguaje c",
            categoria: "C",
            imagen : diploma_lenguaje_c,
        },
        {
            nombre: "Curso de Fundamentos de Hardware con Arduino",
            categoria: "Arduino",
            imagen : diploma_fundamentos_arduino,
        },
        {
            nombre: "Curso de Funciones C",
            categoria: "C",
            imagen : diploma_funciones_c,
        }


    
    ]

    const buscarCertificado =  certificaciones.filter(
        (element) => element.nombre.toLowerCase().includes(busqueda.toLowerCase()) || element.categoria.toLowerCase().includes(busqueda.toLowerCase())
    
    )

    const changeBusquedaValue = (event) => {
        setBusqueda(event.target.value)
    }

    React.useEffect( () => {
        setTimeout(() => {
            !loading && setCerts(certificaciones)
            setLoading(true)
        }, 3000);

    })


    // Filtor si usar useEffect
    

    

  return (
    <div>
        <h1>Hola mis certificados</h1>

        {/* <form action=""> */}
            <label htmlFor="buscarCertificados">Buscar</label>
            <input type="text" id='buscarCertificados' 
            // value={busqueda} 
            onChange={ changeBusquedaValue} />

            
        {/* </form> */}
        
        <div className="bodyCards__certifications">
        {loading && buscarCertificado.map( element => (
                <div
                    className="card" 
                    style={{ 
                        width: "30rem",
                        padding: "0",
                    }} 
                >
                    <img 
                        src={element.imagen} 
                        className="card-img-top" 
                        alt="..."
                        style={{
                            borderRadius:"10px 10px 0 0"
                        }}
                    />
                    <div className="card-body">
                        <h4>{element.nombre}</h4>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    </div>
                </div> 

            ))}
            {!loading && 

                <div>
                    <div class="card" aria-hidden="true"
                        style={{ 
                            width: "30rem",
                            padding: "0",
                        }} 
                    >
                        {/* <svg src="http://www.w3.org/2000/svg" class="card-img-top" alt="..." /> */}
                        <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></svg>
                        <div class="card-body">
                            <h5 class="card-title placeholder-glow">
                            <span class="placeholder col-6"></span>
                            </h5>
                            <p class="card-text placeholder-glow">
                            <span class="placeholder col-12 placeholder-sm"></span>
                            <span class="placeholder col-7 placeholder-sm"></span>
                            {/* <span class="placeholder col-12 placeholder-sm"></span> */}
                            </p>
                        </div>
                    </div>
                    <div class="card" aria-hidden="true"
                        style={{ 
                            width: "30rem",
                            padding: "0",
                        }} 
                    >
                        {/* <svg src="http://www.w3.org/2000/svg" class="card-img-top" alt="..." /> */}
                        <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></svg>
                        <div class="card-body">
                            <h5 class="card-title placeholder-glow">
                            <span class="placeholder col-6"></span>
                            </h5>
                            <p class="card-text placeholder-glow">
                            <span class="placeholder col-12 placeholder-sm"></span>
                            <span class="placeholder col-7 placeholder-sm"></span>
                            {/* <span class="placeholder col-12 placeholder-sm"></span> */}
                            </p>
                        </div>
                    </div>
                    <div class="card" aria-hidden="true"
                        style={{ 
                            width: "30rem",
                            padding: "0",
                        }} 
                    >
                        {/* <svg src="http://www.w3.org/2000/svg" class="card-img-top" alt="..." /> */}
                        <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></svg>
                        <div class="card-body">
                            <h5 class="card-title placeholder-glow">
                            <span class="placeholder col-6"></span>
                            </h5>
                            <p class="card-text placeholder-glow">
                            <span class="placeholder col-12 placeholder-sm"></span>
                            <span class="placeholder col-7 placeholder-sm"></span>
                            {/* <span class="placeholder col-12 placeholder-sm"></span> */}
                            </p>
                        </div>
                    </div>
                </div>
            }
        </div>

        
    </div>
  )
}

export default Certificados

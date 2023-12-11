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
            nombre: "Transformaciones y transiciones css",
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

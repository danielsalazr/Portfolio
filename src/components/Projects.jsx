import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import todoListimage from '@assets/projects/TodoList.png'
import dataMonitoring from '@assets/projects/Data_Monitoring.png'
import dashboard from '@assets/projects/dashboard.png'
import catalogo from '@assets/projects/catalogo.png'
import portfolio from '@assets/projects/simple_porfolio.png'

SwiperCore.use([Navigation]);

const Projects = () => {

    const projectos = [
        {
            name: 'Dashboard Web IOT.',
            link: 'https://sypde.xyz:15000/cha',
            image:dataMonitoring,
            description:'Servicio web IOT con comunicacion MQTT permite monitoreo remoto de maquinas industriales.',
            languages: [
                // 'Javascript',
                'Bootstrap',
                'Express',
            ]
        },
        {
            name: 'Lista de Todos',
            link: 'https://danielsalazr.github.io/Introduccion-a-react/',
            image:todoListimage,
            description:'Lista de Tareas para no olvidar tus quehaceres, diseñada en React y subida a gitub pages.',
            languages: [
                'React',
                'Bootstrap',
            ]
        },
        {
            name: 'Seguimiento de Tareas',
            link: 'http://sypde.xyz:8000/',
            image:dashboard,
            description:'Catalogo para poder verificar articulos de uso cotidiano en una empresa, permite crear, buscar y observar listado completo de items. ',
            languages: [
                'Django',
                'Bootstrap',
            ]
        },
        {
            name: 'Catalogo de Articulos',
            link: 'http://sypde.xyz:8042/',
            image:catalogo,
            description:'Catalogo para poder verificar articulos de uso cotidiano en una empresa, permite crear, buscar y observar listado completo de items. ',
            languages: [
                'Django',
                'Python',
            ]
        },
        {
            name: 'Portafolio de consumo de API REST',
            link: 'https://629c2a5e1aa1b50008df3351--comfy-dodol-e7c449.netlify.app/',
            image:portfolio,
            description:'Portafolio simple elaborado con Webpack, sirviendo en netlify y actualizado directamente desde el repositorio de github.',
            languages: [
                'Javascript',
            ]
        },
    ]

    // var swiper = new Swiper(".mySwiper", {
    //     slidesPerView: 1,
    //     spaceBetween: 30,
    //     slidesPerGroup: 1,
    //     centeredSlides: false,
    //     loop: false,
    //     loopFillGroupWithBlank: true,
        const breakpoints = {
          590: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          890: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1180: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1450: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
        }

        const swiperParams = {
            // opciones comunes a todas las resoluciones
            // loop: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
            },
            // opciones según la resolución de la pantalla
            breakpoints: breakpoints
          };

  return (
    <>
        <h2 className="page-titles">Proyectos</h2>

        <Swiper
                        // spaceBetween={20}
                        // slidesPerView={5}
                        // onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}
                        {...swiperParams}
                    >
                        {projectos.map( project => (
                        <SwiperSlide>
                        <div className="card-proyect">
                        {/* <a className="projectLink" href={project.link}> */}
                            <img className="imagen-proyectos" src={project.image} alt=""></img>
                            <div className="descripcion-proyectos"> 
                                <h2 className="titulo-proyecto">{project.name}</h2>
                                <p className="decripcion__parrafo">
                                    {project.description}
                                </p>
                                <span className=''>Enlace: <a className="link" href={project.link}>Visitar proyecto</a></span>
                                <div className="lenguajes-proyectos">
                                    { project.languages.map( language => (
                                        <span className={'language ' + language}> {language} </span>
                                    ))
                                    }
                                </div>
                            </div>
                            {/* </a> */}
                        </div>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                    {/* <div className="swiper-pagination"></div> */}
                    </Swiper>

    </>
  )
}

export default Projects

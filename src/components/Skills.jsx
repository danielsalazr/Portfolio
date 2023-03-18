import React from 'react'
import html from '@images/html.png'
import css from '@images/css3.png';
import javascript  from '@images/javascript.png';
import python  from '@images/python.png';
import java  from '@images/java.png';
import c  from '@images/lenguaje_c.png';
import react1  from '@images/React1.png';
import bootstrap  from '@images/bootstrap.png';
import tailwind  from '@images/Tailwind_CSS_Logo.png';
import nodejs  from '@images/node_js.png';
import expres  from '@images/express.png';
import django  from '@images/dj.png';


const Skills = () => {

 const skillsImages =  [
    {
        image: html,
    },
    {
        image: css,
    },
    {
        image: javascript,
    },
    {
        image: python,
    },
    {
        image: java,
    },
    {
      image: c,
    },
]
  const frameworksImages =  [
    {
        image: django,
    },
    {
        image: react1,
    },
    {
        image: bootstrap,
    },
    {
        image: tailwind,
    },
    {
        image: nodejs,
    },
    {
        image: expres,
    },
  ]

  return (
    <>
        <div className="habilidades" id="habilidades">
            <h2 className='page-titles'>Lenguajes de programacion</h2>
            <div className="habilidades__lenguajes">
                {skillsImages.map(skills => (
                  <div className="card">
                    <img className="logos" src={skills.image} alt=""></img>
                  </div>
                  ))
                }
            </div>
            <h2 className="page-titles">frameworks</h2>
            <div className="habilidades__frameworks">
              {frameworksImages.map(frameworks => (
                  <div className="card">
                    <img className="logos" src={frameworks.image} alt=""></img>
                  </div>
                  ))
                }
            </div>
        </div>
    </>
  )
}

export default Skills

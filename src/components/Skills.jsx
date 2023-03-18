import React from 'react'
import html from '@images/html.png'
// import css from '@images/css3.png';

const Skills = () => {

//  const skillsImages =  [
//     {
//         image: html,
//     },
//     {
//         image: css,
//     },
//     {
//         image: html,
//     },
// ]

  return (
    <>
        <div class="habilidades" id="habilidades">
            <h2 class="habilidades__titulos">Lenguajes de programacion</h2>
            <div class="habilidades__lenguajes">
                <div class="card">
                <img class="logos" src={html} alt=""></img>
                </div>
                <div class="card">
                <img class="logos" src="" alt=""></img>
                </div>
                <div class="card">
                <img class="logos" src="assets/img/javascript.png" alt=""></img>
                </div>
                <div class="card">
                <img class="logos" src="assets/img/python.png" alt=""></img>
                </div>
                <div class="card">
                <img class="logos" src="assets/img/java.png" alt=""></img>
                </div>
                <div class="card">
                <img class="logos" src="assets/img/lenguaje_c.png" alt=""></img>
                </div>
            </div>
            <h2 class="habilidades__titulos">frameworks</h2>
            <div class="habilidades__frameworks">
                <div class="card">
                <img class="logos" src="assets/img/React1.png" alt=""></img>
                </div>
                <div class="card">
                <img class="logos" src="assets/img/bootstrap.png" alt=""></img>
                </div>
                <div class="card">
                <img class="logos" src="assets/img/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg" alt=""></img>
                </div>
                <div class="card">
                <img class="logos" src="assets/img/node_js.png" alt=""></img>
                </div>
                <div class="card">
                <img class="logos" src="assets/img/express.png" alt=""></img>
                </div>
                <div class="card">
                <img class="logos" src="assets/img/dj.png" alt=""></img>
                </div>
            </div>
        </div>
    </>
  )
}

export default Skills

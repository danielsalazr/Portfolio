import React from 'react'
import logo from '@images/github.png'
import cv from '@assets/pdf/Frontend_Daniel_Salazar_Munoz_CV_SP.pdf'

const Header = () => {
    return (
        <header className="header">
            <div className="header__nombre">Portafolio Daniel Salazar</div>
            <div className="nav">
            <nav>
                <ul className="menu">
                <li className="Menu-Item uno"><a href="#mi" className="text">Sobre mi</a> </li>
                <li className="Menu-Item dos"><a href="#habilidades">Habilidades</a></li>
                <li className="Menu-Item tres"><a href="#proyectos">Proyectos</a></li>
                <li className="Menu-Item cuatro"><a href={cv}>Curriculum</a></li>
                {/* <embed src={cv} width="100%" height="800px" /> */}
                </ul>
            </nav>
            </div>
        </header>
    );
}

export default Header;
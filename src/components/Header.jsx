import React from 'react'
import logo from '@images/github.png'

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
                <li className="Menu-Item cuatro"><a href="https://sypde.xyz:15000/CV_Daniel_Salazar_Munoz.pdf">Curriculum</a></li>
                </ul>
            </nav>
            </div>
        </header>
    );
}

export default Header;
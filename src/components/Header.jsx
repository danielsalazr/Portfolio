import React from 'react'
import { useState } from 'react'
import logo from '@images/github.png'
import cv from '@assets/pdf/Fullstack_Daniel_Salazar_Munoz_CV_SP.pdf'

const Header = () => {

    const [menuBtnState, setMenuBtnState] = useState(false);

    function manejarCambioCheckbox() {
        setMenuBtnState(!menuBtnState);
    }

    function handleClick(event) {
    // event.preventDefault();
    setMenuBtnState(!menuBtnState);
    // setAnimado(true);
    setTimeout(() => {
        window.location.href = href;
    }, 1000); // 1000ms = 1 segundo
    }

    
    return (
        <header className="header">
            <div className="header__nombre">
                <span>Portafolio Daniel Salazar</span>
                <div className={`${menuBtnState ? 'menu-btn__pressed' : ''} nav-btn`} onClick={manejarCambioCheckbox}>
                    <box-icon name='menu' color={menuBtnState ? 'black' : 'white'}></box-icon>
                </div>
            </div>
            <div className={`nav ${menuBtnState ? 'nav__open' : 'nav__close'}`}>
                <nav>
                    <ul className="menu">
                        <li className="Menu-Item uno"><a href="#mi" onClick={handleClick}><span>Sobre mi</span></a> </li>
                        <li className="Menu-Item dos"><a href="#habilidades" onClick={handleClick}><span>Habilidades</span></a></li>
                        <li className="Menu-Item tres"><a href="#proyectos" onClick={handleClick}><span>Proyectos</span></a></li>
                        <li className="Menu-Item cuatro"><a href={cv} ><span>Curriculum</span></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
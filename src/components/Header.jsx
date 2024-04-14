import React from 'react'
import { useState, useEffect  } from 'react'
import logo from '@images/github.png'
import cv from '@assets/pdf/Fullstack_Daniel_Salazar_Munoz_CV_SP.pdf'
import { Link } from 'react-router-dom';

const Header = () => {

    const [menuBtnState, setMenuBtnState] = useState(false);
    const [checkboxState, setCheckboxState] = useState(false);
    const [anchoPantalla, setAnchoPantalla] = useState(window.innerWidth);


    useEffect(() => {
        const actualizarAnchoPantalla = () => {
          setAnchoPantalla(window.innerWidth);
          if (window.innerWidth > 799) {
            setMenuBtnState(false)
            setCheckboxState(false)
        
        };

        }
    
        window.addEventListener('resize', actualizarAnchoPantalla);
    
        // // Limpia el event listener cuando el componente se desmonta
        return () => {
          window.removeEventListener('resize', actualizarAnchoPantalla);
        };
      }, []);

    function manejarCambioCheckbox() {
        setMenuBtnState(!menuBtnState);
        setCheckboxState(!checkboxState);
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
            {/* {menuBtnState ? 'nav__open' : 'nav__close'} */}
            <input className="menu--checkbox" type="checkbox" name="" id="" checked={checkboxState} />
            <div className={`nav`}> 
                <nav>
                <input className="menu--checkbox" type="checkbox" name="" id="" checked={checkboxState} />
                    <ul className="menu">
                        <li className="Menu-Item uno"><Link to="/#mi"  onClick={handleClick} className="text">Sobre mi</Link> </li>
                        <li className="Menu-Item dos"><a href="/#habilidades" onClick={handleClick} className="text">Habilidades</a></li>
                        <li className="Menu-Item tres"><a href="/#proyectos" onClick={handleClick} className="text">Proyectos</a></li>
                        <li className="Menu-Item tres"><Link to="/certificaciones" onClick={handleClick} className="text">Certificaciones</Link></li>
                        <li className="Menu-Item cuatro"><a href={cv} className="text">Curriculum</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
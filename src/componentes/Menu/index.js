import React from 'react';
import Logo from '../../assets/img/logo.png'
import './Menu.css'; //se eu tivesse criado css para o menu
import ButtonLink from './componente/ButtonLink';




function Menu () { 
    return (
        <nav className="Menu"> 
            <a href="/"> 
                <img className="Logo" src={Logo} alt="interatflix logo" />
            </a>
            
            <ButtonLink className="ButtonLink" href="/">Props especifica chamada children</ButtonLink>
        </nav>
    );
}

export default Menu; 
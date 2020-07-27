import React from 'react';
import Logo from '../../assets/img/logo-site.png';
import './Menu.css';
import ButtonLink from './ButtonLink';

function Menu() {
    return (
        <nav className='Menu'>
            <a href='/'>
                <img className='Logo' src={Logo} alt='Tecflix logo'></img>
            </a>

            <ButtonLink className='ButtonLink' href='/'>Novo vídeo</ButtonLink>
        </nav>
    );
}

export default Menu;
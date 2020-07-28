import React from 'react';
import Logo from '../../assets/img/logo-site.png';
import './Menu.css';
// import ButtonLink from './ButtonLink';
import Button from '../Button'

function Menu() {
    return (
        <nav className='Menu'>
            <a href='/'>
                <img className='Logo' src={Logo} alt='Tecflix logo'></img>
            </a>

            <Button as='a' className='ButtonLink' href='/'>Novo vídeo</Button>
        </nav>
    );
}

export default Menu;
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="AugustusFlix logo" />
            </a>

            <Button as={Link} className="ButtonLink" to="/cadastro/video" >
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;
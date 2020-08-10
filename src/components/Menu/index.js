import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import { MenuWrapper, LogoImage, ButtonLink } from './components/ButtonLink/style';

function Menu() {
  return (
    <MenuWrapper className="Menu">
      <a href="/">
        <LogoImage src={Logo} alt="AugustusFlix logo" />
      </a>

      <ButtonLink as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </ButtonLink>
    </MenuWrapper>
  );
}

export default Menu;

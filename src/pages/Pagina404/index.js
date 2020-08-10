import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageDefault from '../../components/PageDefault';

const Title = styled.h1`
    flex: 1;
`;

function Pagina404() {
  return (
    <PageDefault>
      <Title> Página não encontrada! </Title>

      <Link to="/">
        Voltar para Home
      </Link>
    </PageDefault>
  );
}

export default Pagina404;

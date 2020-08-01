import React from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
    flex: 1;
`;

function Pagina404() {
    return (
        <PageDefault >
            <Title> "Página não encontrada!" </Title>

            <Link to="/" >
                Voltar para Home
            </Link>
        </PageDefault>
    )
}

export default Pagina404;
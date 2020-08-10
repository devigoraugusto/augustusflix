import React from 'react';
import styled from 'styled-components';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

const HomeWrapper = styled.div`
  background: var(--grayDark);

  padding-top: 94px;
  padding-top: var(--bodyPaddingTop);
  @media (max-width: 800px) {
    padding-top: 40px;
    padding-top: var(--bodyPaddingTop);
  }
`;

function Home() {
  return (
    <HomeWrapper style={{ background: '#141414' }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="Músicas para aprender e desenvolver as técnicas de violão, e de quebra curtir com os amigos."
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        category={dadosIniciais.categorias[5]}
      />

      <Footer />
    </HomeWrapper>
  );
}

export default Home;

import React from 'react';
import Menu from '../../Menu';
import dadosIniciais from '../../../data/dados_iniciais.json';
import BannerMain from '../../BannerMain';
import Carrousel from '../../Carousel';
import Footer from '../../Footer';

function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end?"}
      />

      <Carrousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carrousel 
        category={dadosIniciais.categorias[1]}
      />

      <Carrousel 
        category={dadosIniciais.categorias[2]}
      />

      <Footer />
    </div>
  );
}

export default Home;

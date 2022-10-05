import React from 'react'
import Title from '../components/Title';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const HomePages = () => {
  return (
    <>
    <NavBar />
    <Title nombre="Home" subTitulo="Pagina Principal"/>
    <Footer />
    </>
  );
};

export default HomePages;
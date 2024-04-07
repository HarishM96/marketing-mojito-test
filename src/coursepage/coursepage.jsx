import React from 'react';
import Navbar from './navbar';
import Carousel from './carousel';
import ContentA from './contentpage';
import ContentB from './contentpage2';
import Footer from './footer';

const Coursepage = () => {
  return (
    <div>
        <Navbar/>
        <Carousel/>
        <ContentA/>
        <ContentB/>
        <Footer/>
    </div>
  )
}

export default Coursepage;
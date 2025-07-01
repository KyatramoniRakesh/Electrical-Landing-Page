import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import About from './About';
import Products from './Jsx/Products/Products';
import Services from './Services';
import Clients from './Clients';
import Footer from './Footer';
import Product from './Jsx/Products/Product';
// import Contact from './Jsx/Contact';
const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Products />
      <Services />
      <Clients />
      <Footer />
      {/* <Contact/> */}
    </>
  );
};

export default Home;

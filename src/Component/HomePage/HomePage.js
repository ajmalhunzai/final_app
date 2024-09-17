import Blog from "../Bolg/Blog";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";

import Product from "../Products/Product";
import Whatapp from "../Whatapp/Whatapp";

import Uncategrical from "../Uncategrical/Uncategrical";



const HomePage = () => {
  
  return (
    <>
      {/* <Logoheader /> */}
      <Whatapp />
      <Hero />
      <Product />
      <Uncategrical />
      <Blog />
      {/* <MyComponent /> */}
      <Contact />
    </>
  );
};

export default HomePage;

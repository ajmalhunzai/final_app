import React, { useState } from "react";
import Blog from "../Bolg/Blog";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Product from "../Products/Product";
import Whatapp from "../Whatapp/Whatapp";
import Sidebar from "../Sidebar/Sidebar";
import Uncategrical from "../Uncategrical/Uncategrical";
import MyComponent from "../Fetch"


const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* <Logoheader /> */}
      <Whatapp />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
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

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./text.css";
import { Container, Content, Card,DivSearch,Searchbox,Inputsear,SearchBtn } from "./HeroElements";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "./Slider/Carousel";
import {BsSearch} from "react-icons/bs"

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container id="Hero">
      <Carousel />
    </Container>
  );
};

export default Hero;

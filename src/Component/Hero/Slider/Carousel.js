import React from "react";
import { Carousel } from "react-responsive-carousel";
import img from "../../images/mainSliderone.png";
import img2 from "../../images/Gem-removebg-preview.png";
import img3 from "../../images/logo-nav.png";
import { Container, Div, Img } from "./CarouselElements";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Container>
    <Carousel
      autoPlay
      showThumbs={false}
      showIndicators={false}
      infiniteLoop={true}
      interval={6000}
      showArrows={true}
      
      // style={{ backgroundColor: "#000000" }}
    >
      <Div>
        <Img alt="" src={img} style={{ width: "60%", height: "50vh" }} />
      </Div>
      <Div>
        <Img alt="" src={img2} style={{ width: "100%", height: "60vh" }} />
      </Div>
      <Div>
        <Img alt="" src={img3} style={{ width: "60%", height: "50vh" }} />
      </Div>
    </Carousel>
  </Container>
);

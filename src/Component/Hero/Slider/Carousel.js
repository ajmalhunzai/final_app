import React from "react";
import { Carousel } from "react-responsive-carousel";
import img from "../../../images/app-Banner.webp";
import img2 from "../../../images/chopped & peeled app.webp";
import img3 from "../../../images/Frozen Meat Web Banner - FTH_11zon-min.webp";
import img4 from "../../../images/Rice Web Banner - FTH_11zon.webp";
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
      <Div >
        <Img alt="" src={img} style={{ width: "90%", height: "60vh" }} className="rounded-lg" />
      </Div>
      <Div>
        <Img alt="" src={img2} style={{ width: "90%", height: "60vh"  }}  className="rounded-lg"/>
      </Div>
      <Div>
        <Img alt="" src={img3} style={{ width: "90%", height: "60vh" }} className="rounded-lg"/>
      </Div>
      <Div>
        <Img alt="" src={img4} style={{ width: "90%", height: "60vh" }} className="rounded-lg"/>
      </Div>
    </Carousel>
  </Container>
);

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
      <Content>
        <Card>
          <h1>
            Discover the Beautysaldh of Nature, Premium{" "}
            <span class="underlined underline-clip">Minerals</span> and{" "}
            <span class="underlined underline-mask"> Gems</span> for Sale
          </h1>
          <br />

          {/* <DivSearch>
            <Searchbox>
              <Inputsear type="search" placeholder="What are you lookng For?"/> <BsSearch fontWeight={900} />
            </Searchbox>
             <SearchBtn> Search</SearchBtn>
          </DivSearch> */}
        </Card>
      </Content>
    
      <Carousel />
    </Container>
  );
};

export default Hero;

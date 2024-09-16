import styled from "styled-components";
import Gems from "../images/Gem.jpg";
import Mineral from "../images/Mineral.jpg";
export const Continer = styled.div`
 padding:20px; 0px;
 @media (max-width: 900px) {
  padding:0px 0px;
  
}

`;

export const HeadingCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 0;

  @media (max-width: 512px) {

    width: 100%;
    /* border-radius: 15px; */
  }
`;

export const HeadingWrapper = styled.div`
  border-radius: 15px;
  ${"" /* background-color: #ece8de; */}
  ${"" /* width: 90%; */}
  text-align: center;

  @media (max-width: 894px) {
    width: 90%;
  }
  @media (max-width: 512px) {
  }
`;

export const ProductConatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 0;
`;
export const ProductWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;

  @media (max-width: 1080px) {
  
    width: 100%;
  }
  @media (max-width: 894px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const GemsProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-right: 15px;
  padding: 15px 10px;
  overflow: hidden;
  transition: all ease-in-out 0.5s;
  ${'' /* background-image: url(${Gems}); */}
  background-size: contain;
  width: 100%;
  height: 50vh;
  background-repeat: no-repeat;

  @media(max-width:1054px){

    margin-right: 0px;
  }
 
`;
export const MineralsProduct = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-right: 15px;
  padding: 15px 10px;
  overflow: hidden;
  transition: all ease-in-out 0.5s;
  ${'' /* background-image: url(${Mineral}); */}
  background-size: cover;
  width: 100%;
  height: 50vh;
  background-repeat: no-repeat;
  color:#FFFFFF;


`;
export const Div = styled.div`
  ${"" /* display:f; */}
  justify-contain: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

export const Img = styled.img`
  ${"" /* width: 400px; */}
  ${"" /* border-radius: 40px 40px 0 40px; */}
  width:100%;
  transition: all 0.5s ease-out;
  ${
    "" /* @media (max-width: 1280px) {
    width: 350px;
  }
  @media (max-width: 1080px) {
    width: 300px;
  }
  @media (max-width: 912px) {
    width: 250px;
  }
  @media (max-width: 894px) {
    width: 320px;
    border-radius: 20px 20px 0 20px;
  }
  @media (max-width: 512px) {
    width: 200px;
    border-radius: 20px 20px 0 20px;
  }
  @media (max-width: 360px) {
    width: 180px;
    border-radius: 20px 20px 0 20px;
  } */
  }

  &:hover {
    transform: scale(1.2);
    transition: all 0.5s ease-out;
  }
`;




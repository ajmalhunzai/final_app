import styled from "styled-components";

export const ContinerFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  align-items: stretch;

  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const SpecailOfferConatiner = styled.div`
  width: 30%;
  margin-right: 55px;
  @media (max-width: 1080px) {
    width: 100%;
  }

  @media (max-width: 710px) {
    margin-right: 15px;
    width: 100%;
  }
`;

export const SpecialCardConatiner = styled.div`
  padding: 40px 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 1080px) {
    flex-direction: row;
  }

  @media (max-width: 710px) {
    flex-direction: column;
  }

  .maintimer {
    @media (max-width: 1080px) {
      display: none;
    }
  }
`;
export const SpecialCard = styled.div`
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);
  background-color: #e7f6fc;
  margin: 40px 0;
  padding: 10px 20px;
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;
  border-radius: 15px;
  @media (max-width: 1080px) {
    margin: 0px 40px;
    padding: 10px 20px;
    align-items: stretch;
  }

  div {
    line-height: 1px;
  }
  img {
    width: 80%;
  }
  button {
    padding: 16.5px 33px;
    border-radius: 22px;
    color: black;
    font-size: 20px;
    background: #029fe3;
    font-family: "Lucida Grande", Helvetica, Arial, Sans-Serif;
    text-decoration: none;
    vertical-align: middle;
    border: none;
    margin: 10px 0;
  }
  button:hover {
    background: #4a2878;
    color: #cccccc;
  }
  button:active {
    background: #1b435e;
  }

  .timer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px 30px;
  }
  @media (max-width: 710px) {
    margin: 10px 10px;
    padding: 5px 7px;
    width:100%;
  }
`;

export const ImgDivofr = styled.div`
  position: relative;
  padding: 15px;
  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    background: #ff5b2e;
    border-radius: 100px;
    width: 80px;
    height: 80px;
    color: #fff;
    right: 105px;
    line-height: 25px;
  }
  img {
  }
`;
export const TrendingProductConatiner = styled.div`
  width: 70%;
  @media (max-width: 1080px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);
`;
export const TrendindCardConatiner = styled.div`
  padding: 40px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 25px;
  grid-row-gap: 25px;

  @media (max-width: 880px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
  }
  @media (max-width: 580px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
  }
`;

export const TrendingCard = styled.div`
  background: #fde7cb;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);
  border-radius: 15px;

  div {
    line-height: 1px;
  }
  img {
    width: 100%;
    height: 30vh;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  button {
    ${"" /* opacity: 0; */}
    transition: opacity 0.3s ease-in;
  }

  &:hover button {
    ${
      "" /* opacity: 1;
    display: block; */
    }
  }
`;

export const Remaning = styled.div`
  padding: 10px 20px;
`;

export const Logo = styled.img`
  width: 40px;
  height: 30px;
  padding: 0 10px;
`;

export const FavoriteConatiner = styled.div``;

export const FavCardConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
  @media (max-width: 580px) {
    flex-direction: column;
    padding: 20px 0;
  }
`;
export const FavCard = styled.div`
  width: 90%;
  margin: 10px 10px;
  padding: 20px;
  position: relative;
  ${"" /* background: #fde7cb; */}
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);
  border-radius: 15px;
  overflow: hidden;
  width: 450px;
  height: 250px;
  z-index: 1;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0.6;
    background: #fde7cb;
    ${"" /* background: #f4c4cb; */}
  }

  img {
    position: absolute;
    width: 450px;
    height: 250px;
    padding: 0;
  }
  .text {
    width: 100%;
    z-index: 99;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
  h2 {
  }
  p {
    line-height: 1px;
  }

  @media (max-width: 580px) {
    margin: 10px 0px;
    width: auto;
    padding: 0;
  }
`;

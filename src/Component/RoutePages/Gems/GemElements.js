import { Link } from "react-router-dom";
import styled from "styled-components";

export const Contianer = styled.div``;

export const GemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const GemStore = styled.div`
  width: 80%;
  margin: 100px 0px;
`;

export const Items = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 25px;
  grid-row-gap: 50px;
  @media (max-width: 1380px) {
    grid-column-gap: 15px;
    grid-row-gap: 25px;
  }
  @media (max-width: 1280px) {
    grid-column-gap: 15px;
    grid-row-gap: 25px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
  @media (max-width: 1080px) {
    grid-column-gap: 15px;
    grid-row-gap: 25px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
  @media (max-width: 512px) {
    grid-column-gap: 15px;
    grid-row-gap: 25px;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(8, 1fr);
  }
`;

export const ItemDetail = styled(Link)`
  text-decoration: none;
  color: black;
  border: 1px solid grey;
  transition: transform 0.6s;
  overflow: hidden;
  text-align: center;
  background-color: #e2cfa3;
  display: flex;
  jusify-content: center;
  align-items: center;
  flex-direction: column;

  :hover img {
    transition: transform 0.6s;
  }
  h4 {
    padding: 15px;
    transition: transform 0.6s;
    display: flex;
    jusify-content: center;
    align-items: center;
  }

  & img {
    transition: transform 0.6s;
    overflow: hidden;
    width: 400px;
    height: 200px;
  }
  & div {
    overflow: hidden;
    width: 400px;
  }
  & h4:hover {
    transition: transform 0.6s;
    color: gray;
  }
`;

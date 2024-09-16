import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  ${"" /* border:1px solid red; */}
`;
export const Content = styled.div`
  padding: 40px 100px;

  @media (max-width: 656px) {
    padding: 40px 60px;
  }
  @media (max-width: 512px) {
    padding: 40px 30px;
  }
`;

export const Card = styled.div`
  width: 100%;
  h1 {
  }
`;
export const DivSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 980px) {
    flex-direction: column;
  }
`;
export const Searchbox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  width: 60%;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);
  border-radius: 50px;
`;
export const Inputsear = styled.input`
  font-size: 16px;
  outline: none;
  border: none;
  width: 100%;
`;
export const SearchBtn = styled.button`
  padding: 20px 40px;
  cursor:pointer;
  font-size: 16px;
  border: none;
  border-radius: 50px;
  font-weight:700;

  &:hover{
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);
    
  }
`;

export const SilderContainer = styled.div`
  width: 70%;
`;

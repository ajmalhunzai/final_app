import React from "react";
import styled from "styled-components";
import img from "../../../../images/logo.jpg";
import { Link as LinkS } from "react-scroll";
import { Link as  LinkR } from "react-router-dom";


const Container = styled.div`
  padding: 10px 12px;
  font-size: 1rem;
  // position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  background: #ece8ded1;
  color: #000;
`;
const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10vh;
  z-index: 1;
`;
const NavLogo = styled(LinkR)`
  cursor: pointer;
  text-decoration: none;
  @media screen and (max-width: 1280px) {
  }
  @media screen and (max-width: 768px) {
  }
`;
const LogoImg = styled.img`
  width: 80px;
  @media screen and (max-width: 1248px) {
  }
  @media screen and (max-width: 768px) {
    width: 100px;
  }
`;

const NavMenu = styled.ul`
  display: flex;

  align-items: center;
  list-style: none;
  text-align: center;
  border-radius: 7px;
  height: 6vh;

  @media screen and (max-width: 1394px) {
  }
  @media screen and (max-width: 1280px) {
  }


`;

 const NavItem = styled.li`
  // height:80px;
`;

const NavLinks = styled(LinkS)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  cursor: pointer;
  text-transform: uppercase;
`;
const NavLink = styled(LinkR)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  cursor: pointer;
  text-transform: uppercase;
`;

const SingleNav = () => {
  return (
    <Container>
      <NavBarContainer>
        <NavLogo to="/">
          <LogoImg src={img} />
        </NavLogo>

        <NavMenu>
        <NavItem>
            <NavLink to="/" smooth={300}>
              Home 
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/Minerals" smooth={300}>
              MineralStore
            </NavLink>
          </NavItem>
          
          <NavItem>
            <NavLinks to="Contact" smooth={300}>
              Contact
            </NavLinks>
          </NavItem>
        </NavMenu>
      </NavBarContainer>
    </Container>
  );
};

export default SingleNav;

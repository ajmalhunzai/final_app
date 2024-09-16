import React,{useContext} from "react";
import styled from "styled-components";
import img from "../../images/logo.jpg";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import Cart from "../../Cart/Cart";
import { FaBars } from "react-icons/fa";
import { Createcart } from "../../../Context/Context";
import {
  Nav,
  NavBarContainer,
  MoblieIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLogo,
  LogoImg,
  FLexanv,
  Cartlogo
} from "../../Navbar/NavbarElement";

import { AiOutlineShoppingCart } from "react-icons/ai";
import Himalayas from "../../images/logo-nav.png";



const GemNav = ({toggle}) => {
  const {
    // gems context functions //
    cartItems,

    // minerals context functions //
    mineralsCartItems,

    // special offer functions and node data
    offerCartItems,

    // Trending offer functions and nodes data
    trendingCartItems,
  } = useContext(Createcart);

  const one = cartItems.length;
  const minerals = mineralsCartItems.length;
  const offer = offerCartItems.length;
  const trending = trendingCartItems.length;
  const totalCart = one + minerals + offer + trending;
  return (
    <Nav>
    <FLexanv style={ {borderBottom:"3px solid black"}}>

      <NavBarContainer>
        <NavLogo to="/">
          <LogoImg src={Himalayas} />
        </NavLogo>
        <MoblieIcon onClick={toggle}>
          <FaBars style={{ color: "#000", background: "#0000" }} />
        </MoblieIcon>

        <NavMenu>
          <NavItem>
            <NavLinks to="/" smooth={400}>
              Home{" "}
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/" smooth={300}>
              Products
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/" smooth={300}>
              Uncategrical
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/" smooth={300}>
              Blog
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="Contact" smooth={300}>
              Contact
            </NavLinks>
          </NavItem>
        </NavMenu>
      </NavBarContainer>
      <Cartlogo to="/Cart">
        <AiOutlineShoppingCart size={40} color="black" />
        <span className="px-2">({totalCart})</span>
      </Cartlogo>
    </FLexanv>
    </Nav>
  );
};

export default GemNav;

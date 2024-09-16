import React from "react";
import {
  SidebarContainer,
  SideHeader,
  NavLogo,
  LogoImg,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Himalayas from "../images/logo-nav.png";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SideHeader style={{ borderBottom: "3px solid black" }}>
        <NavLogo to="/">
          <LogoImg src={Himalayas} />
        </NavLogo>
        <Icon>
          <CloseIcon
            onClick={toggle}
            style={{ color: "#000", background: "#0000" }}
          />
        </Icon>
      </SideHeader>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="Hero" onClick={toggle} smooth={400}>
            Home
          </SidebarLink>
          <SidebarLink to="About" onClick={toggle} smooth={400}>
            About
          </SidebarLink>
          <SidebarLink to="Product" onClick={toggle} smooth={400}>
            Product
          </SidebarLink>

          <SidebarLink to="Blog" onClick={toggle} smooth={400}>
            Blog
          </SidebarLink>
          <SidebarLink to="Contact" onClick={toggle} smooth={400}>
            Contact
          </SidebarLink>
          <Link to="/Cart">
            <AiOutlineShoppingCart size={40} color="black" />
          </Link>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

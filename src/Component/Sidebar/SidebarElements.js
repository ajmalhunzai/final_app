import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { Link as Linklogo } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 60%;
  padding: 10px 15px;
  height: 100vh;
  background-color: #fffaf5;
  top: 0;
  left: 0;
  transition: 0.2s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const SideHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled(Linklogo)`
  cursor: pointer;
  text-decoration: none;
  width: 70px;
`;

export const LogoImg = styled.img`
  width: 70px;
`;
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-wiidth: 480px) {
    grid-tamplate-rows: repeat(6, 60px);
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: tarnsparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-self: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.5s all ease-in-out;
  cursor: pointer;
  margin: 10px;
  color: #000;
  &:hover {
    color: gray;
    transition: 0.5s all ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const SidebarRoute = styled(LinkS)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;

    color: #010606;
  }
`;

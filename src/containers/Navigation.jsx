import React from "react";
import styled from "styled-components";
import Container from "../components/Container";

const NavigationBar = styled.nav`
  background-color: ${props => props.theme.colorBackground};
  padding: 12px 0;
  text-align: center;
  position: static;
  top: 0;
  width: 100%;
  z-index: 9999;

  @media (min-width: 992px) {
    position: fixed;
  }
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  display: inline-block;
  margin: 0 8px;
  color: ${props => props.theme.colorTitles};
  font-family: ${props => props.theme.fontTitles};
  font-size: 16px;
  transition: ${props => props.theme.transition};
`;

const NavLink = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: ${props => props.theme.colorBackground}99;
    color: ${props => props.theme.colorTitles}99;
    transition: ${props => props.theme.transition};
  }
`;

export default function Navigation() {
  return (
    <NavigationBar>
      <Container>
        <NavList>
          <NavItem>
            <NavLink href="#about">Introduction</NavLink>
          </NavItem>
          <NavItem>•</NavItem>
          <NavItem>
            <NavLink href="#skills">Skills</NavLink>
          </NavItem>
          <NavItem>•</NavItem>
          <NavItem>
            <NavLink href="#projects">Projects</NavLink>
          </NavItem>
          <NavItem>•</NavItem>
          <NavItem>
            <NavLink href="#gallery">Gallery</NavLink>
          </NavItem>
          <NavItem>•</NavItem>
          <NavItem>
            <NavLink href="#contact">Contact</NavLink>
          </NavItem>
        </NavList>
      </Container>
    </NavigationBar>
  );
}

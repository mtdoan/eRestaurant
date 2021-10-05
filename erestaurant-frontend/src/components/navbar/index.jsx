import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Marginer } from "../marginer";
import { Link } from "react-router-dom";
import { HomePagePath } from "../../Paths";
import { buildPath } from "../../Paths";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5em;
  background-color: ${({ useTransparent }) =>
    useTransparent ? "transparent" : "rgba(205, 2, 36, 0.9)"
  };
`;

const AccessibilityContainer = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  align-items: center;
`;


const CenterContainer = styled.div`
  height: 40px;
  width: 60%;
  display: block;
  align-items: center;
`;

const MenuContainer = styled.div`
  height: 40px;
  width: 400px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  padding: 4px;
  border-radius: 4px;
`;

const HomeMenuContainer = styled.div`
  height: 50px;
  width: 400px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  padding: 4px;
  background: rgba(205, 2, 36, 0.9);
  border-radius: 4px;
`;

const MenuLoginRegisterContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  background-color: transparent;
`;

const AnchorLink = styled(Link)`
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out;
  &:hover {
    filter: contrast(0.6);
  }
`;

const AnchorLinkLoginRegisterContainer = styled(Link)`
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out;
  &:hover {
    filter: contrast(0.6);
  }
`;

const Seperator = styled.div`
  min-height: 35%;
  width: 1px;
  background-color: #fff;
`;

const SeperatorLoginRegisterContainer = styled.div`
  min-height: 35%;
  width: 1px;
  background-color: #fff;
`;

export function Navbar(props) {
  const { useTransparent } = props;
  const menuMarginSize = 60;
  const accessibilityMarginSize = 20;

  return (
    <NavbarContainer id={props.id} useTransparent={useTransparent}>
      <AccessibilityContainer>
      <BrandLogo id="brandLogo"/>
      </AccessibilityContainer>

        <HomeMenuContainer>
          <Marginer direction="horizontal" margin={menuMarginSize} />
          <AnchorLink to={HomePagePath}>Home</AnchorLink>
          <Marginer direction="horizontal" margin={menuMarginSize} />
          <Seperator />
          <Marginer direction="horizontal" margin={menuMarginSize} />
          <AnchorLink to={buildPath("order")}>Order</AnchorLink>
          <Marginer direction="horizontal" margin={menuMarginSize} />
          <Seperator />
          <Marginer direction="horizontal" margin={menuMarginSize} />
          <AnchorLink to={buildPath("about")}>About</AnchorLink>
          <Marginer direction="horizontal" margin={menuMarginSize} />
        </HomeMenuContainer>

      <AccessibilityContainer id="rightAccessibilityBar">
        <div style={{ marginLeft: "auto" }} />
        <AnchorLink to={buildPath("register")}>Register</AnchorLink>
        <Marginer direction="horizontal" margin={accessibilityMarginSize} />
        <Seperator />
        <Marginer direction="horizontal" margin={accessibilityMarginSize} />
        <AnchorLink to={buildPath("signin")}>Login</AnchorLink>
      </AccessibilityContainer>
    </NavbarContainer>
  );
}

export function NavbarLoginRegister(props) {
  const { useTransparent } = props;
  const marginSize = 24;
  return (
    <NavbarContainer useTransparent={useTransparent}>
      <BrandLogo />
      <div style={{ marginLeft: "auto" }} />
      <MenuLoginRegisterContainer>
        <AnchorLinkLoginRegisterContainer to={HomePagePath}>Home</AnchorLinkLoginRegisterContainer>
        <Marginer direction="horizontal" margin={marginSize} />
        <SeperatorLoginRegisterContainer />
        <Marginer direction="horizontal" margin={marginSize} />
        <AnchorLinkLoginRegisterContainer to={buildPath("register")}>Register</AnchorLinkLoginRegisterContainer>
        <Marginer direction="horizontal" margin={marginSize} />
        <SeperatorLoginRegisterContainer />
        <Marginer direction="horizontal" margin={marginSize} />
        <AnchorLinkLoginRegisterContainer to={buildPath("signin")}>Login</AnchorLinkLoginRegisterContainer>
        <Marginer direction="horizontal" margin={marginSize} />
      </MenuLoginRegisterContainer>
    </NavbarContainer>
  );
}

export function NavbarLoggedIn(props) {
  const { useTransparent } = props;
  const menuMarginSize = 60;

  return (
    <NavbarContainer useTransparent={useTransparent}>
          <AccessibilityContainer>
            <BrandLogo/>
          </AccessibilityContainer>
            <HomeMenuContainer>
              <Marginer direction="horizontal" margin={menuMarginSize} />
              <AnchorLink to={HomePagePath}>Home</AnchorLink>
              <Marginer direction="horizontal" margin={menuMarginSize} />
              <Seperator />
              <Marginer direction="horizontal" margin={menuMarginSize} />
              <AnchorLink to={buildPath("menu")}>Menu</AnchorLink>
              <Marginer direction="horizontal" margin={menuMarginSize} />
              <Seperator />
              <Marginer direction="horizontal" margin={menuMarginSize} />
              <AnchorLink to={buildPath("about")}>About</AnchorLink>
              <Marginer direction="horizontal" margin={menuMarginSize} />
            </HomeMenuContainer>
          <AccessibilityContainer style={{display: 'flex',  justifyContent:'right'}}>
          <h1 >Hello User! </h1>
          </AccessibilityContainer>
    </NavbarContainer>
  );
}

export function NavbarOrder(props) {
  const { useTransparent } = props;
  const menuMarginSize = 60;
  const element = <FontAwesomeIcon icon={faShoppingCart} />

  return (
    <NavbarContainer useTransparent={useTransparent}>
      <BrandLogo />
      <CenterContainer>
        <MenuContainer>
          <Marginer direction="horizontal" margin={menuMarginSize} />
          <AnchorLink to={HomePagePath}>Home</AnchorLink>
          <Marginer direction="horizontal" margin={menuMarginSize} />
          <Seperator />
          <Marginer direction="horizontal" margin={menuMarginSize} />
          <AnchorLink to={buildPath("order")}>Order</AnchorLink>
          <Marginer direction="horizontal" margin={menuMarginSize} />
          <Seperator />
          <Marginer direction="horizontal" margin={menuMarginSize} />
          <AnchorLink to={buildPath("about")}>About</AnchorLink>
          <Marginer direction="horizontal" margin={menuMarginSize} />
        </MenuContainer>
      </CenterContainer>

      <AccessibilityContainer>
        <div style={{ marginLeft: "auto" }} />
        <h1 style={{ color: "#fff" }}>{element}</h1>
      </AccessibilityContainer>
    </NavbarContainer>
  );
}

import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Button } from "../button";
import { Marginer } from "../marginer";
import { Link } from "react-router-dom";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";
import { buildPath } from "../../Paths";
import { Container, Row, Col } from 'react-grid';

const NavbarContainer = styled.div`
  width: 100%;
  height: 65px;
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
  display: flex;
  align-items: center;
`;

const AnchorLink = styled(Link)`
  font-size: 12px;
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

export function Navbar(props) {
  const { useTransparent } = props;

  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <NavbarContainer useTransparent={useTransparent}>
      <BrandLogo />
      <AccessibilityContainer>
        {!isMobile && <AnchorLink>Homepage</AnchorLink>}
        {!isMobile && <Marginer direction="horizontal" margin={10} />}
        {!isMobile && <Seperator />}
        <Marginer direction="horizontal" margin={10} />
        <Link to={buildPath("signup")}>
          <Button size={11}>Register</Button>
        </Link>
        <Marginer direction="horizontal" margin={8} />
        <AnchorLink to={buildPath("signin")}>Login</AnchorLink>
      </AccessibilityContainer>
    </NavbarContainer>
  );
}

export function NavbarLoggedIn(props) {
  const { useTransparent } = props;
  const menuMarginSize = 60;
  const accessibilityMarginSize = 20;

  return (
    <NavbarContainer useTransparent={useTransparent}>
      <Container>
      <Row>
        <Col>
         <BrandLogo/>
        </Col>
        <Col sm>
          <CenterContainer>
            <MenuContainer>
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
            </MenuContainer>
          </CenterContainer>
        </Col>
        <Col>
          <p>Hello User!</p>
        </Col>
      </Row>
      </Container>
    </NavbarContainer>
  );
}

export function NavbarLoginRegister(props) {
  const { useTransparent } = props;
  const marginSize = 24;
  return (
    <NavbarContainer useTransparent={useTransparent}>
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

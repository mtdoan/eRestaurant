import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Marginer } from "../marginer";
import { Link } from "react-router-dom";
import { HomePagePath } from "../../Paths";
import { buildPath } from "../../Paths";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { getUser, getStaffUser } from "../../components/utils/client";
import { logout } from '../../components/utils/client';

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
  margin-right: 1rem;
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
  const [isUser, setIsUser] = useState(false);

  const checkUser = () => {
    getUser(
      (user) => {
        setIsUser(user != null)
      }
    );
  }

  useEffect(() => {
    checkUser();
  }, []);

  const logoutHandler = () => {
    logout(() => setIsUser(false));
  }

  return (
    <NavbarContainer id={props.id} useTransparent={useTransparent}>
      <AccessibilityContainer>
        <BrandLogo id="brandLogo" />
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

      {!isUser
        ? <AccessibilityContainer id="rightAccessibilityBar">
          <div style={{ marginLeft: "auto" }} />
          <AnchorLink to={buildPath("register")}>Register</AnchorLink>
          <Marginer direction="horizontal" margin={accessibilityMarginSize} />
          <Seperator />
          <Marginer direction="horizontal" margin={accessibilityMarginSize} />
          <AnchorLink to={buildPath("signin")}>Login</AnchorLink>
        </AccessibilityContainer>
        : <AccessibilityContainer id="rightAccessibilityBar">
          <div style={{ marginLeft: "auto" }} />
          <AnchorLink >
            <span onClick={logoutHandler}>Logout</span>
          </AnchorLink>
        </AccessibilityContainer>
      }
    </NavbarContainer>
  );
}

export function NavbarLoggedIn(props) {
  const { useTransparent } = props;
  const menuMarginSize = 60;
  const [userName, setUserName] = useState("customer");

  const getUserName = () => {
    getUser((user) => setUserName(user.firstName));
  }

  useEffect(() => {
    getUserName();
  }, []);

  return (
    <NavbarContainer useTransparent={useTransparent}>
      <AccessibilityContainer>
        <BrandLogo />
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
      <AccessibilityContainer style={{ display: 'flex', justifyContent: 'right', marginTop: '18px', fontColor: 'white' }}>
        <p style={{ color: "#fff", fontSize: "1rem" }}>Hello {userName}!</p>
      </AccessibilityContainer>
    </NavbarContainer>
  );
}

export function NavbarStaff(props) {
  const { useTransparent } = props;
  const menuMarginSize = 60;
  const [staffName, setStaffName] = useState("staff");

  const getStaffName = () => {
    getStaffUser((staff) => setStaffName(staff.firstName));
  }

  useEffect(() => {
    getStaffName();
  }, []);

  return (
    <NavbarContainer useTransparent={useTransparent}>
      <AccessibilityContainer>
        <BrandLogo />
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
      <AccessibilityContainer style={{ display: 'flex', justifyContent: 'right', marginTop: '18px', fontColor: 'white' }}>
        <p style={{ color: "#fff", fontSize: "1rem" }}>Hello {staffName}!</p>
      </AccessibilityContainer>
    </NavbarContainer>
  );
}

export function NavbarLoginRegister(props) {
  const { useTransparent } = props;
  const marginSize = 20;
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

export function NavbarOrder(props) {
  const { useTransparent } = props;
  const marginSize = 60;
  const element = <FontAwesomeIcon icon={faShoppingCart} />

  return (
    <NavbarContainer useTransparent={useTransparent}>
      <BrandLogo />
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

      <AccessibilityContainer>
        <div style={{ marginLeft: "auto" }} />
        <h1 style={{ color: "#fff" }}>{element}</h1>
      </AccessibilityContainer>
    </NavbarContainer>
  );
}

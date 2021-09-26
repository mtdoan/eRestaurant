import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavbarOrder } from "../../components/navbar";
import { Link } from "react-router-dom";
import CartScrollContainer from "../../components/cart/CartScrollContainer";
import { ProductScrollContainer } from "../../components/products/ProductScrollContainer";
import { loadCart, getUser } from "../../components/utils/client";

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InnerPageContainer = styled.div`
  flex: 1;
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  min-height: 100vh;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AnchorLink = styled(Link)`
  color: #000;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  margin: 10px 0 10px 0;
  text-decoration: none;
  font-size: 15px;
  outline: none;
  transition: all 200ms ease-in-out;
  &:hover {
    filter: contrast(0.6);
  }
`;

const SeperatorLoginRegisterContainer = styled.div`
  min-height: 35%;
  width: 1px;
  background-color: #000;
`;

const MenuTypeContainer = styled.div`
  height: 40px;
  display: flex;
  margin: auto;
  margin-bottom: 8px;
  align-items: center;
  background-color: transparent;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const MARGIN_SIZE = 60;

const Tab = styled.button`
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;
const types = ['Entree', 'Main', 'Desserts', 'Drinks' ];

export function OrderPage() {
  const [cart, setCart] = useState({ cartItems: [] });
  const [active, setActive] = useState(types[0]);
  const [userName, setUserName] = useState("customer");

  const refreshCart = () => {
    loadCart((cartItems) => setCart({ cartItems }));
  };

  const getUserName = () => {
    getUser((user) => setUserName(user.firstName));
  }

  useEffect(() => {
    console.log('Call CART api');
    refreshCart();
    getUserName();
  }, []);

  return (
    <PageWrapper>
      <InnerPageContainer>
        <NavbarOrder />
        <MenuTypeContainer>Hello, {userName}</MenuTypeContainer>
        <MenuTypeContainer>
          <ButtonGroup>
            {types.map(type => (
              <Tab
                key={type}
                active={active === type}
                onClick={() => setActive(type)}
              >
                {type}
              </Tab>
            ))}
          </ButtonGroup>
        </MenuTypeContainer>

        <ContentWrapper>
          <ProductScrollContainer onCartChange={refreshCart} type={active}/>
          <CartScrollContainer cartItems={cart.cartItems} onCartChange={refreshCart} />
        </ContentWrapper>
      </InnerPageContainer>
    </PageWrapper>
  );
}

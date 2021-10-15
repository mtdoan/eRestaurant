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

const MenuTypeContainer = styled.div`
  height: 40px;
  display: flex;
  margin-top: 8px;
  margin-bottom: 8px;
  align-items: center;
  background-color: transparent;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
`;

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

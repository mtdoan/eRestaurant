import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavbarLoggedIn } from "../../components/navbar";
import CartScrollContainer from "../../components/cart/CartScrollContainer";
import { ProductScrollContainer } from "../../components/products/ProductScrollContainer";
import { loadCart } from "../../components/utils/client";
import {
  PageWrapper, TopSectionContainer, BackgroundFilter, TopSectionInnerContainer, InnerPageContainer,
  MenuTypeContainer, ContentWrapper
} from "../../components/commonStyle/commonStyle";

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

const types = ['Entree', 'Main', 'Dessert', 'Drink'];

export function OrderPage() {
  const [cart, setCart] = useState({ cartItems: [] });
  const [active, setActive] = useState(types[0]);

  const refreshCart = () => {
    loadCart((cartItems) => setCart({ cartItems }));
  };

  useEffect(() => {
    console.log('Call CART api');
    refreshCart();
  }, []);

  return (
    <PageWrapper>
      <TopSectionContainer>
        <BackgroundFilter>
          <NavbarLoggedIn useTransparent />
          <TopSectionInnerContainer>
            <InnerPageContainer>
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
                <ProductScrollContainer onCartChange={refreshCart} type={active} />
                <CartScrollContainer cartItems={cart.cartItems} onCartChange={refreshCart} />
              </ContentWrapper>
            </InnerPageContainer>
          </TopSectionInnerContainer>
        </BackgroundFilter>
      </TopSectionContainer>
    </PageWrapper>
  );
}

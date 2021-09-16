import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavbarOrder } from "../../components/navbar";
import { Marginer } from "../../components/marginer";
import { Link } from "react-router-dom";
import CartScrollContainer from "../../components/cart/CartScrollContainer";
import { ProductScrollContainer } from "../../components/products/ProductScrollContainer";
import { loadCart, userId } from "../../components/utils/client";

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
  align-items: center;
  background-color: transparent;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const MARGIN_SIZE = 60;

export function OrderPage() {
  const [cart, setCart] = useState({ cartItems: [] });
  const refreshCart = () => {
    loadCart(userId(), (cartItems) => setCart({ cartItems }));
  };

  useEffect(() => {
    console.log('Call CART api');
    refreshCart();
  }, []);

  return (
    <PageWrapper>
      <InnerPageContainer>
        <NavbarOrder />
        <MenuTypeContainer>Hello, "USERNAME"</MenuTypeContainer>
        <MenuTypeContainer>
          <AnchorLink>Entree</AnchorLink>
          <Marginer direction="horizontal" margin={MARGIN_SIZE} />
          <SeperatorLoginRegisterContainer />
          <Marginer direction="horizontal" margin={MARGIN_SIZE} />
          <AnchorLink>Main</AnchorLink>
          <Marginer direction="horizontal" margin={MARGIN_SIZE} />
          <SeperatorLoginRegisterContainer />
          <Marginer direction="horizontal" margin={MARGIN_SIZE} />
          <AnchorLink>Desserts</AnchorLink>
          <Marginer direction="horizontal" margin={MARGIN_SIZE} />
          <SeperatorLoginRegisterContainer />
          <Marginer direction="horizontal" margin={MARGIN_SIZE} />
          <AnchorLink>Drinks</AnchorLink>
        </MenuTypeContainer>

        <ContentWrapper>
          <ProductScrollContainer onCartChange={refreshCart} />
          <CartScrollContainer cartItems={cart.cartItems} onCartChange={refreshCart} />
        </ContentWrapper>
      </InnerPageContainer>
    </PageWrapper>
  );
}

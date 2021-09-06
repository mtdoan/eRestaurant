import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { deviceSize } from "../../components/responsive";
import Products from "../../components/products";
import { productData } from "../../components/products/data";

const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

`;

const wait = (num) => new Promise((rs) => setTimeout(rs, num));

export function Menu(props) {
  return (
    <MenuContainer>
      <Products heading="Choose your favorite" data={productData} />
    </MenuContainer>
  );
}

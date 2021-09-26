import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  ProductTitle,
  ProductInfo,
  ProductButton,
  ProductDescription,
  ProductScrollDiv
} from './ProductsElements';
import { addDishToCart, loadDishes, userId } from "../utils/client";

// const Tab = styled.button`
//   font-size: 20px;
//   padding: 10px 60px;
//   cursor: pointer;
//   opacity: 0.6;
//   background: white;
//   border: 0;
//   outline: 0;
//   ${({ active }) =>
//     active &&
//     `
//     border-bottom: 2px solid black;
//     opacity: 1;
//   `}
// `;
// const ButtonGroup = styled.div`
//   display: flex;
// `;


export function ProductScrollContainer({ onCartChange, type }) {
  const [data, setData] = useState({ dishes: [] });

  const addToCart = (productId) => {
    addDishToCart(userId(), productId, onCartChange);
  }; 

  useEffect(() => {
    loadDishes((dishes) => setData({ dishes }));
  }, []);

  console.log('Render');
  if (!data) {
    return "No post!";
  }
  return (
    <ProductScrollDiv>
      <>
        {data.dishes.map(product => {
          const addHandler = () => {
            addToCart(product.id);
          };
          return (
            <div key={product.id} style={{ display: "flex", alignItems: "center", width: "100%" }}>
              {product.menuType === type ? 
              <>
                <ProductInfo>
                  <ProductTitle>{product.name} ${product.price}</ProductTitle>
                  <ProductDescription>{product.description}</ProductDescription>
                </ProductInfo>
                <ProductButton onClick={addHandler}>Add to cart</ProductButton> 
              </>
              : "" }
            </div>
          )
        })}
      </>

      
    </ProductScrollDiv>
  )
}



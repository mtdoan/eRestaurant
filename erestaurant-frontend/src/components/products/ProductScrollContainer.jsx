import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  ProductTitle,
  ProductInfo,
  ProductButton,
  ProductDescription,
  ProductScrollDiv
} from './ProductsElements';
import { addDishToCart, loadDishes } from "../utils/client";

export function ProductScrollContainer({ onCartChange, type }) {
  const [data, setData] = useState({ dishes: [] });

  const addToCart = (productId) => {
    addDishToCart(productId, onCartChange);
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



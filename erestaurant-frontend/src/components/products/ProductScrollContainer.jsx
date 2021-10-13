import React, { useState, useEffect } from "react";
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
  console.log('dishes', data);
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
            <div key={product.id} style={{ alignItems: "center", width: "100%", margin: "auto" }}>
              {product.menuType === type ? 
              <div style = {{display: "flex", margin: "10px 10px" }}>
                <ProductInfo>
                  <ProductTitle>{product.name} ${product.price}</ProductTitle>
                  <ProductDescription>{product.description}</ProductDescription>
                </ProductInfo>
                <ProductButton onClick={addHandler}>Add to cart</ProductButton> 
              </div>
              : "" }
            </div>
          )
        })}
      </>

      
    </ProductScrollDiv>
  )
}



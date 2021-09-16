import React, { useState, useEffect } from "react";
import {
  ProductTitle,
  ProductInfo,
  ProductButton,
  ProductDescription,
  ProductScrollDiv
} from './ProductsElements';
import { addDishToCart, loadDishes, userId } from "../utils/client";


export function ProductScrollContainer({ onCartChange }) {
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
      {data.dishes.map(product => {
        const addHandler = () => {
          addToCart(product.id);
        };
        return (
          <div key={product.id} style={{ display: "flex", alignItems: "center", width: "100%" }}>
            <ProductInfo>
              <ProductTitle>{product.name} ${product.price}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
            </ProductInfo>
            <input type="button" value="-" className="minus" style={{ margin: "0 0 0 50px " }} />
            <p>{1}</p>
            <input type="button" value="+" className="plus" />
            <ProductButton onClick={addHandler}>Add to cart</ProductButton>
          </div>
        )
      })}
    </ProductScrollDiv>
  )
}

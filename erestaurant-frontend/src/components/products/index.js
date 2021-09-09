import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from "./datajson";
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  CardBox,
  ProductInfo,
  ProductDescription,
  ProductPrice,
  ProductButton
} from './ProductsElements';



const Products = ({ heading, data }) => {
  const [datan, setDatan] = useState({dishes: []});

  useEffect(() => {
    console.log('Call api');
    axios.get(`http://localhost:8081/dishes`).then((response) => {
      console.log(response);
      setDatan({dishes: response.data});
    });
  }, []);

  console.log('Render');
  if (!datan) {
    return "No post!";
  }
 

  return (
    <ProductsContainer>
      {/* {datan.dishes.map(dish => 
        <p key={dish.id}>{dish.name}</p>)
      } */}
      {/* <p>{JSON.stringify(datan)}</p> */}
      
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {datan.dishes.map(product => {
          return (
            <ProductCard key={product.id}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDescription>{product.description}</ProductDescription>
                <ProductPrice>${product.price}</ProductPrice>
                <ProductButton>{product.button}</ProductButton>
              </ProductInfo>  
            </ProductCard>
          )
        })} 
      </ProductWrapper>
    </ProductsContainer>
  )
}

export default Products;

import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import {addDishToCart, removeDishFromCart } from '../utils/client';
import { useHistory } from "react-router-dom";

const CartItemInfo = styled.div`
  width: 80%;
  padding: 1rem;
  text-align: start;
`;

const CartItemButtonContainer = styled.div`
  width: 20%;
  display: flex;
  margin-right: 2rem;
  margin-left: 1rem;
  text-align: start;
  justify-content: center;
`;

const CartScrollDiv = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: 85%;
`;

const CartContainer = styled.div`
  border: 1px solid red;
  width: 40%;
  height: 700px;
  margin: 0 0 1rem 1rem;

`;

const ItemTitle = styled.h2`
  font-weight: 700;
  font-size: 1rem;
`;

const Button = styled.button`
  height: fit-content;
  font-size: 0.7rem;
  border: none;
  outline: none;
  background: rgb(205, 2, 36);
  border-radius: 16px;
  color: #fff;
  transition: 0.2 ease-out;
  text-align: center;
  padding: 0.6rem 1rem;
  margin: 10px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  &:hover {
      background: #B71C1C;
      transition: 0.2s ease-out;
      cursor: pointer;
      color: #fff;
  }
`;

const ConfirmContainer = styled.div`
  width: 100%;
  height: 15%;
  text-align: center;
  display: block;

`;

const CartScrollContainer = ({ cartItems, onCartChange }) => {
  const [cart, setCart] = useState({ cartItems: cartItems });
  const history = useHistory();
  
  const addToCart = (productId) => {
    addDishToCart(productId, onCartChange);
  };

  const deleteFromCart = (productId) => {
    removeDishFromCart(productId, onCartChange);
  };

  useEffect(() => {
    setCart({ cartItems });
  }, [cartItems]);

  console.log('Render');
  if (!cart) {
    return "No post!";
  }

  let total = 0;
  for (let i = 0; i < cart.cartItems.length; i++) {
    total += cart.cartItems[i].dish.price * cart.cartItems[i].count;
  }

  const confirmOrderHandler = () => {
    history.push("/eRestaurant/booking");
  };

  return (
    <CartContainer>
      <CartScrollDiv>
        {cart.cartItems.map(cartItem => {
          const addHandler = () => {
            addToCart(cartItem.dish.id);
          };

          const deleteHandler = () => {
            deleteFromCart(cartItem.dish.id);
          };
          return (
            <div key={cartItem.id} style={{ display: "flex", alignItems: "center", height: "110px", width: "100%" }}>
              <CartItemInfo>
                <ItemTitle>
                  {cartItem.dish.name} ${cartItem.dish.price}
                </ItemTitle>
                <p>
                  {cartItem.dish.description}
                </p>
              </CartItemInfo>
              <CartItemButtonContainer>
                <input type="button" value="-" className="minus" style={{ margin: "0 0 0 40px " }} onClick={deleteHandler} />
                <p style={{ margin: "0 8px 0 8px " }}>{cartItem.count}</p>
                <input type="button" value="+" className="plus" onClick={addHandler} />
              </CartItemButtonContainer>
            </div>
          )
        })}
      </CartScrollDiv>
      <ConfirmContainer>
        <p style={{ margin: "auto"}}>Total = ${total}</p>
        <Button onClick={confirmOrderHandler}>Confirm Order</Button>
      </ConfirmContainer>
    </CartContainer>
  )
}

export default CartScrollContainer;

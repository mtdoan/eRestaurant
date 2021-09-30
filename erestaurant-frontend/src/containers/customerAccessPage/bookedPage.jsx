import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavbarLoginRegister } from "../../components/navbar";
import { Link } from "react-router-dom";
import { HomePagePath } from "../../Paths";
import { getBooking, loadCart } from "../../components/utils/client";

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
`;

const InvoiceContainer = styled.div`
  width: 700px;
  flex-direction: column;
  text-align: left;
  margin: auto;
  padding: 1rem;  
  border-style: solid;
  border-color: #000;
  display: flex;
`;

  const PageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
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

  const Heading = styled.h1`
  color: #000;
  `;

  const AnchorLink = styled(Link)`
    color: #000;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    margin: 10px 0 10px 0;
  `;
  const CartItemInfo = styled.div`
    width: 80%;
    text-align: start;
  `;

  const ItemTitle = styled.h2`
    font-weight: 700;
    font-size: 1rem;
  `;

  const CartItemButtonContainer = styled.div`
    width: 20%;
    display: flex;
    justify-content: top;
    margin: auto;
    text-align: top;

  `;

  const CartContainer = styled.div`
    width: 100%;
    margin: 0 0.5rem 0.5rem 0;
    display: flex;
    text-align: start;

  `;

export function BookedPage() {
  const [booking, setBooking] = useState();
  const [cart, setCart] = useState({ cartItems: [] });
  
  const refreshCart = () => {
    loadCart((cartItems) => setCart({ cartItems }));
  };

  const getBookingDetails = () => {
    getBooking((booking) => setBooking(booking));
  }

  useEffect(() => {
    console.log('Call CART api');
    getBookingDetails();
    refreshCart();
  }, []);

  console.log("booking", booking?.bookingId);

  let total = 0;
  for (let i = 0; i < cart.cartItems.length; i++) {
    total += cart.cartItems[i].dish.price * cart.cartItems[i].count;
  }

  return (
    <PageWrapper>
      <NavbarLoginRegister />
      <InnerPageContainer>
        <FormContainer>
          <Heading>Your booking has been placed successfully.</Heading>
          <h3>Here is your invoice </h3>
          <InvoiceContainer>
            <p>Booking number: #202100A{booking?.bookingId}</p>
            <p>Date: {(new Date(booking?.dateEpoch)).toLocaleDateString()} </p>
            <p> Time: {(() => {
              switch (booking?.time) {
                case "1":  return 'Lunch 10:30AM';
                case "2":  return 'Lunch 11:00AM';
                case "3":  return 'Lunch 11:30AM';
                case "3":  return 'Lunch 11:30AM';
                case "4":  return 'Lunch 12:00AM';
                case "5":  return 'Lunch 12:30AM';
                case "6":  return 'Dinner 5:30PM';
                case "7":  return 'Dinner 6:00PM';
                case "8":  return 'Dinner 6:30PM';
                case "9":  return 'Dinner 7:00PM';
                case "10": return 'Dinner 7:30PM';
                case "11": return 'Dinner 8:00PM';
                case "12": return 'Dinner 8:30PM';
                default:   return "Lunch 10:30AM";
              }
            })()}</p>
            <p>Location: {booking?.restaurantId == 1 ? "Haymarket" : "Mascot" } </p>
            <p>Order menu: </p>
            <div className="cart"> 
              {cart.cartItems.map(cartItem => {
                return (
                  <CartContainer key={cartItem.id} >
                    <CartItemInfo>
                      <ItemTitle>
                        {cartItem.dish.name} ${cartItem.dish.price}
                      </ItemTitle>
                      <p style={{ margin: "1rem "}}>
                        {cartItem.dish.description}
                      </p>
                    </CartItemInfo>
                    <CartItemButtonContainer>
                      <p style={{ margin: "0 8px 0 8px " }}>Quantity: {cartItem.count}</p>
                    </CartItemButtonContainer>
                  </CartContainer>
                )
              })}
              
            </div>
            <ItemTitle >Total price: ${total}</ItemTitle>
          </InvoiceContainer>
          
          <p>Thank you! </p>
          <p>----------------------------------------------------------------------- </p>
          <p>Go to the <span><AnchorLink to={HomePagePath}>homepage</AnchorLink></span> now</p>
        </FormContainer>
      </InnerPageContainer>
    </PageWrapper>
  );
}

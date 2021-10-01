import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getBooking, loadCart, getUser } from "../../components/utils/client";
import 'antd/dist/antd.css';

const PageWrapper = styled.div`
  width: 800px;
  min-height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RowDiv = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 0;
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  font-size: 16px;
`;

const ColDiv = styled.div`
  width: 30%;
  padding: 0;
  margin: "auto"
  display: inline-block;
  flex-direction: column;
  align-items: center;
  text-align: left;
`;
const SmallColDiv = styled.div`
  width: 10%;
  padding: 0;
  margin: "auto"
  display: inline-block;
  flex-direction: column;
  align-items: center;
  text-align: left;
`;

export const Invoice = React.forwardRef((props, ref) => {
  const [booking, setBooking] = useState();
  const [cart, setCart] = useState({ cartItems: [] });
  const [user, setUser] = useState(null);
  
  const refreshCart = () => {
    loadCart((cartItems) => setCart({ cartItems }));
  };

  const getBookingDetails = () => {
    getBooking((booking) => setBooking(booking));
  }

  const getUserName = () => {
    getUser((user) => setUser(user));
  }

  useEffect(() => {
    console.log('Call CART api');
    getBookingDetails();
    refreshCart();
    getUserName();
  }, []);

  console.log("booking", booking?.bookingId);

  let total = 0;
  for (let i = 0; i < cart.cartItems.length; i++) {
    total += cart.cartItems[i].dish.price * cart.cartItems[i].count;
  }

  return (
    <PageWrapper ref={ref}>
      <RowDiv style={{ flexDirection: "column" }}>
        <div style={{ textAlign: "center" }}>  
          <h1>Invoice</h1>
        </div>
      </RowDiv>

      <RowDiv>
        <SmallColDiv />
        <ColDiv >
          <h3>Le Bistro D'Andre</h3>
          <div>Address: 1B King Road</div>
          <div>Haymarket, NSW 2000</div>
          <div>Phone: 1300 367 283</div>
        </ColDiv>
        <SmallColDiv />
        <SmallColDiv />
        <ColDiv >
          <table style={{ fontSize: "16px", textAlign: "left" }}>
            <tr>
              <th>Invoice # :</th>
              <td>0001</td>
            </tr>
            <tr>
              <th>Invoice Date :</th>
              <td>01-10-2021</td>
            </tr>
            <tr>
              <th>&nbsp;</th>
            </tr>
            <tr>
              <th>&nbsp;</th>
            </tr>
          </table>
        </ColDiv>
        <SmallColDiv />
      </RowDiv>

      <RowDiv>
        <ColDiv >
          <h3>Contact Details</h3>
          <div>Customer: {user?.firstName} {user?.lastName}</div>
          <div>Email: {user?.email}</div>
          <div>Phone: {user?.phoneNumber}</div>
        </ColDiv>
        <SmallColDiv />
        <SmallColDiv />
        <SmallColDiv />
        <SmallColDiv />
        <SmallColDiv />
      </RowDiv>

      <RowDiv style={{ display: "flex" }}>
          <table style={{ fontSize: "16px", width: "100%", margin: "0 0 0 80px", textAlign: "left" }}>
            <thead >
              <tr>
                <th>No.</th>
                <th style={{ width: "55%" }}>Product</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody >
            {cart.cartItems.map(cartItem => {
              return (
                <tr key={cartItem.id} >
                    <td>
                      {cartItem.id}
                    </td>
                    <td>
                      {cartItem.dish.name} 
                    </td>
                    <td> 
                      ${cartItem.dish.price}
                    </td>
                    <td> 
                      {cartItem.count}
                    </td>
            
                </tr>
              )
            })}
            <tr> 
                <td colSpan="4">_____________________________________________________________________________</td>
              </tr>
              <tr>
                <td colSpan="2">Sub-total</td>
                <td colSpan="2">${total}</td>
              </tr>
              <tr>
                <td colSpan="2">Discount</td>
                <td colSpan="2">$0</td>
              </tr>
              <tr>
                <th colSpan="2">Total</th>
                <th colSpan="2">${total}</th>
              </tr>
            </tbody>
          </table>  
      </RowDiv>
     
    </PageWrapper>
  );
});


//  default Invoice;


import React from "react";
import styled from "styled-components";
import { deviceSize } from "../../components/responsive";
import { NavbarLoggedIn } from "../../components/navbar";
import TopSectionBackgroundImg from "../../images/TopSectionBackground.jpeg";
import { useHistory } from 'react-router-dom';
import { Button } from "@material-ui/core";
import { Marginer } from "../../components/marginer";

export function CustomerAccountPage() {
const PageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopSectionContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${TopSectionBackgroundImg}) no-repeat;
  background-position: 0px 0px;
  background-size: cover;
  @media screen and (max-width: ${deviceSize.mobile}px) {height: 700px; background-position: 0px 0px;}
`;

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(234, 125, 125, 0.8);
  display: flex;
  flex-direction: column;
`;

  const InnerPageContainer = styled.div`
    width: 70%;
    min-height: 70vh;
    flex-direction: column;
    background: #ffffff;
  `;

const SideNavContainer = styled.div`
  width: 15%;
  position: fixed;
  display: flex;
  flex-direction: column;
  left: 10%;
  background: #eee;
  overflow-x: hidden;
  padding: 8px 0;
`;

const OperationsButton = styled.button`
  padding: 10px;
  font-size: 40px;
  color: white;
  cursor: pointer;
  text-decoration: none;
  background: rgba(205, 2, 36, 0.9);
  padding: 15px 40px;
  border-radius: 10px;
  border: none;
  // box-shadow: 4px 4px 10px grey;
  transition: all, 240ms ease-in-out;
  background: rgba(205, 2, 36, 0.9); 
  &:focus {
    outline: none;
  }
  &:hover {
    background: #fff;
    color: rgba(205, 2, 36, 0.9);
  }
  }
`;

const Operationsontainer = styled.div`
  // width: 70%;
  min-height: 70vh;
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
  // border: 2px solid black;
  `;

const Title = styled.h1`
  font-size: 45px;
  `;

const history = useHistory();

const goToDetails = () => {
  console.log("go to account details");
  history.push("/eRestaurant/customeraccountdetails")
}

const logout = () => {
  console.log("Logging Out");
  history.push("/eRestaurant/");
}

const order = () => {
  console.log("making an order");
  history.push("/eRestaurant/order")
}

const book = () => {
  console.log("making an booking");
  history.push("/eRestaurant/booking")
}

const invoice = () => {
  console.log("go to invoice");
}

const myBookings = () => {
  console.log("go to made bookings");
  history.push("/eRestaurant/editbooking")
}

const SubmitButton = styled.button`
  padding: 10px;
  margin: auto;
  width: 150px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgba(205, 2, 36, 0.9); 
  &:focus {
    outline: none;
  }
  &:hover {
    background: #fff;
    color: rgba(205, 2, 36, 0.9);
  }
`;

  return (
    <PageWrapper>
      <TopSectionContainer>
        <BackgroundFilter>
            <NavbarLoggedIn useTransparent/>
            <TopSectionInnerContainer>
              <InnerPageContainer>
                <Marginer direction="vertical" margin="2em"/> 
                <Title>Welcome to Le Bistrot D'André</Title>
                <SideNavContainer>
                  <Button onClick={goToDetails}>Account Details</Button>
                  <Button onClick={invoice}>Invoices</Button>
                  <Button onClick={myBookings}>My Bookings</Button>
                  <Button onClick={logout}>Log Out</Button>
                </SideNavContainer>
                <Operationsontainer>
                  <OperationsButton onClick={order}>Order</OperationsButton>
                  <Marginer direction="horizontal" margin="6em"/> 
                  <OperationsButton onClick={book}>Booking</OperationsButton>
                </Operationsontainer>
              </InnerPageContainer>
            </TopSectionInnerContainer>
        </BackgroundFilter>
      </TopSectionContainer>
    </PageWrapper>
  );
}
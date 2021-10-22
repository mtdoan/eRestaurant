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
  font-size: 40px;
  color: white;
  cursor: pointer;
  text-decoration: none;
  background: rgba(205, 2, 36, 0.9);
  padding: 15px 40px;
  border-radius: 10px;
  border: 4px solid rgba(205, 2, 36, 0.9);
  // box-shadow: 4px 4px 10px grey;
  transition: all 200ms ease-in-out;
  &:hover {
    color: rgba(205, 2, 36, 0.9);
    background: white;
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
  history.push("/eRestaurant/");
}

const order = () => {
  history.push("/eRestaurant/order")
}

const book = () => {
  history.push("/eRestaurant/booking")
}

const invoice = () => {
  history.push("/eRestaurant/order/list")

}

const myBookings = () => {
  history.push("/eRestaurant/booking/list")
}

  return (
    <PageWrapper>
      <TopSectionContainer>
        <BackgroundFilter>
            <NavbarLoggedIn useTransparent/>
            <TopSectionInnerContainer>
              <InnerPageContainer>
                <Title>Welcome to Le Bistrot D'André</Title>
                <SideNavContainer>
                  <Button onClick={goToDetails}>Account Details</Button>
                  <Button onClick={invoice}>My Invoices</Button>
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
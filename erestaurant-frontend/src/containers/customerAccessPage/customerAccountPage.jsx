import React from "react";
import styled from "styled-components";
import { NavbarLoggedIn } from "../../components/navbar";
import { useHistory } from 'react-router-dom';
import { Button } from "@material-ui/core";
import { Marginer } from "../../components/marginer";
import { logout } from '../../components/utils/client';
import { PageWrapper, TopSectionContainer, BackgroundFilter, TopSectionInnerContainer, InnerPageContainer, Title} from "../../components/commonStyle/commonStyle";

const SideNavContainer = styled.div`
  margin-top: 100px;
  width: 15%;
  position: fixed;
  display: flex;
  flex-direction: column;
  left: 10%;
  background: rgba(234, 125, 125, 0.57);
  overflow-x: hidden;
  padding: 8px 0;
  border-radius: 16px;
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
  transition: all 200ms ease-in-out;
  &:focus {
    outline: none;
  }
  &:hover {
    background: #ffd6d6;
    color: rgba(205, 2, 36, 0.9);
  }
`;

const OperationContainer = styled.div`
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function CustomerAccountPage() {

  const history = useHistory();

  const goToDetails = () => {
    console.log("go to account details");
    history.push("/eRestaurant/customeraccountdetails")
  }

  const logoutHandler = () => {
    logout(() => {
      history.push("/eRestaurant");
    });
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
                  <Button style={{ fontSize: "0.9rem" }} onClick={goToDetails}>Account Details</Button>
                  <Button style={{ fontSize: "0.9rem" }} onClick={invoice}>My Invoices</Button>
                  <Button style={{ fontSize: "0.9rem" }} onClick={myBookings}>My Bookings</Button>
                  <Button style={{ fontSize: "0.9rem" }} onClick={logoutHandler}>Log Out</Button>
                </SideNavContainer>
                <OperationContainer>
                  <OperationsButton onClick={order}>Order</OperationsButton>
                  <Marginer direction="horizontal" margin="6em"/> 
                  <OperationsButton onClick={book}>Booking</OperationsButton>
                </OperationContainer>
              </InnerPageContainer>
            </TopSectionInnerContainer>
        </BackgroundFilter>
      </TopSectionContainer>
    </PageWrapper>
  );
}
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { deviceSize } from "../../components/responsive";
import { NavbarLoggedIn } from "../../components/navbar";
import TopSectionBackgroundImg from "../../images/TopSectionBackground.jpeg";
import { Container, Row, Col } from 'react-grid';
import { Marginer } from "../../components/marginer";
import { useHistory } from "react-router";
import { useParams } from 'react-router-dom';

export function OrderPaymentPage() {
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
  //margin-top: 20px;
  background-color: white;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(234, 125, 125, 0.8);
  display: flex;
  flex-direction: column;
`;

const SubmitButton = styled.button`
  padding: 10px;
  width: 220px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgba(205, 2, 36, 0.9); 
  &:focus {outline: none;}
  &:hover { background: #fff; color: rgba(205, 2, 36, 0.9);}
`;

const Input = styled.input`
  padding: 5px;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  height: 10x;
  width: 350px;
  `;

  const InnerPageContainer = styled.div`
    width: 70%;
    min-height: 70vh;
    flex-direction: column;
    background: #ffffff;
  `;

  const history = useHistory();
  const { bookingId } = useParams();

  // const [ resBookingId, setResBookingId] = useState(bookingId);

  const callback = () => {
    console.log("Call back");
    history.push(`/eRestaurant/booked/${bookingId}`);
  }

  const submitPaymentHandler = () => {
    callback();
  };

  // useEffect(() => {
    
  // }, []);

  return (
    <PageWrapper>
      <TopSectionContainer>
        <BackgroundFilter>
            <NavbarLoggedIn useTransparent/>
            <TopSectionInnerContainer>
              <InnerPageContainer>
              <Marginer direction="vertical" margin="2em"/> 
              <h1>Card Details</h1>
                    <Container>
                        <Row>
                            <Col sm>    
                              <p>Card Holder Name:</p>
                              <Input placeholder="Name*" />
                              <Marginer direction="vertical" margin="2em"/> 
                              <p>Card CCV:</p> 
                              <Input placeholder="Card CCV*" />
                            </Col>  
                            <Col sm>    
                              <p>Card Number:</p>
                              <Input placeholder="Card Number*" />
                              <Marginer direction="vertical" margin="2em"/> 
                              <p>Card Expiry Date:</p> 
                              <Input placeholder="Date (e.g DD/MM/YYYY)*" />
                            </Col>
                        </Row>
                    </Container>
                    <Marginer direction="vertical" margin="4em"/> 
                    <SubmitButton onClick={()=> history.push("./booked")}>Confirm Order</SubmitButton>
                </InnerPageContainer>
            </TopSectionInnerContainer>
        </BackgroundFilter>
      </TopSectionContainer>
    </PageWrapper>
  );
}
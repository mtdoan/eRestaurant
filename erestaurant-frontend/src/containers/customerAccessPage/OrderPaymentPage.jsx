import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavbarLoggedIn } from "../../components/navbar";
import { Container, Row, Col } from 'react-grid';
import { Marginer } from "../../components/marginer";
import { useHistory, useParams } from 'react-router-dom';
import { PageWrapper, TopSectionContainer, BackgroundFilter, TopSectionInnerContainer, Heading, SubmitButton,
  RowContainer } from "../../components/commonStyle/commonStyle";
import { FormGroup, FormControl, InputLabel, makeStyles } from '@material-ui/core';

// const Input = styled.input`
//   padding: 5px;
//   border-bottom: 1px solid black;
//   border-top: 1px solid black;
//   border-left: 1px solid black;
//   border-right: 1px solid black;
//   height: 10x;
//   width: 350px;
//   `;

const InnerPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
`;

const BookingContainer = styled.div`
  display: block;
  justify-content: space-between;
  width: 100%;
`;

const SmallContainer = styled.div`
  align-items: center;
  justify-content: center;
  ${'' /* margin: 10px; */}
  width: 100%;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${'' /* margin: 10px; */}
  width: 100%;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid black;
  height: 20x;
  width: 100%;
`;

export function OrderPaymentPage() {



  const history = useHistory();
  const { bookingId } = useParams();

  // const [ resBookingId, setResBookingId] = useState(bookingId);

  const callback = () => {
    console.log("Call back");
    history.push(`/eRestaurant/ordered/${bookingId}`);
  }

  const submitPaymentHandler = () => {
    callback();
  };

  return (
    <PageWrapper>
      <TopSectionContainer>
        <BackgroundFilter>
          <NavbarLoggedIn useTransparent />
          <TopSectionInnerContainer>
            <InnerPageContainer>
              <BookingContainer>
                <RowContainer>
                  <Heading>Select your order details</Heading>
                </RowContainer>

                <RowContainer>
                  <InnerContainer>
                    <SmallContainer >
                      <FormControl style={{ width: "50%" }}>
                        <h3>Card Holder Name</h3>
                        <Input placeholder="Name*" />
                      </FormControl>
                    </SmallContainer>
                  </InnerContainer>
                  <InnerContainer>
                    <SmallContainer >
                    <FormControl style={{ width: "50%" }}>
                        <h3>Card Number</h3>
                        <Input placeholder="Card Number*" />
                      </FormControl>
                    </SmallContainer>
                  </InnerContainer>
                </RowContainer>

                <Marginer direction="vertical" margin="4em" />

                <RowContainer>
                  <InnerContainer>
                    <SmallContainer >
                      <FormControl style={{ width: "50%" }}>
                        <h3>Card CCV</h3>
                        <Input placeholder="Card CCV*" />
                      </FormControl>
                    </SmallContainer>
                  </InnerContainer>
                  <InnerContainer>
                    <SmallContainer >
                    <FormControl style={{ width: "50%" }}>
                        <h3>Card Expiry Date</h3>
                        <Input placeholder="MM/YYYY**" />
                      </FormControl>
                    </SmallContainer>
                  </InnerContainer>
                </RowContainer>

              </BookingContainer>

              <Marginer direction="vertical" margin="4em" />
              <SubmitButton onClick={submitPaymentHandler}>Confirm Payment</SubmitButton>

            </InnerPageContainer>
          </TopSectionInnerContainer>
        </BackgroundFilter>
      </TopSectionContainer>
    </PageWrapper>


  );
}


<Container>
  <Row>
    <Col sm>
      <h3>Card Holder Name:</h3>
      <Input placeholder="Name*" />
      <Marginer direction="vertical" margin="2em" />
      {/* <h3>Card CCV:</h3>
                    <Input placeholder="Card CCV*" /> */}
      <FormControl >
        <InputLabel htmlFor="my-input">Card CCV</InputLabel>
        <Input placeholder="Card CCV*" />
      </FormControl>
    </Col>
    <Col sm>
      <h3>Card Number:</h3>
      <Input placeholder="Card Number*" />
      <Marginer direction="vertical" margin="2em" />
      <h3>Card Expiry Date:</h3>
      <Input placeholder="MM/YYYY*" />
    </Col>
  </Row>
</Container>
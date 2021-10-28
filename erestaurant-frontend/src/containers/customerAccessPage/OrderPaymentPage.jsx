import React from "react";
import styled from "styled-components";
import { NavbarLoggedIn } from "../../components/navbar";
import { Marginer } from "../../components/marginer";
import { useHistory, useParams } from 'react-router-dom';
import {
  PageWrapper, TopSectionContainer, BackgroundFilter, TopSectionInnerContainer, Heading, SubmitButton,
  RowContainer
} from "../../components/commonStyle/commonStyle";
import { FormControl, InputLabel } from '@material-ui/core';

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
  width: 100%;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

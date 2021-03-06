import React, { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { NavbarLoggedIn } from "../../components/navbar";
import { useReactToPrint } from 'react-to-print';
import { getBookingFromBookingId } from "../../components/utils/client";
import { Invoice } from '../../components/invoice/invoice';
import { Marginer } from "../../components/marginer";
import { useHistory } from "react-router";
import { PageWrapper, BackgroundFilter, TopSectionContainer, TopSectionInnerContainer, Heading } from "../../components/commonStyle/commonStyle";

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
`;

const InvoiceContainer = styled.div`
  width: 800px;
  flex-direction: column;
  text-align: left;
  margin: auto;
  padding: 1rem 0;  
  display: flex;
`;

const ColDiv = styled.div`
  width: 30%;
  padding: 0;
  margin: "auto"
  display: inline-block;
  flex-direction: column;
  align-items: center;
  text-align: left;
  font-size: 16px;
`;

const SmallColDiv = styled.div`
  width: 7%;
  padding: 0;
  margin: "auto"
  display: inline-block;
  flex-direction: column;
  align-items: center;
  text-align: left;
`;


const RowDiv = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 0;
  margin: 1rem;
  display: flex;
  text-align: left;
  font-size: 16px;
`;

const InnerPageContainer = styled.div`
  width: 70%;
  min-height: 70vh;
  flex-direction: column;
  background: #ffffff;
`;

export function OrderedPage() {
  const componentRef = useRef();

  const [booking, setBooking] = useState();

  const { bookingId } = useParams();
  console.log("bookingId=", bookingId);

  const getBookingDetails = (bookingId) => {
    console.log("getBookingDetails bookingId=", bookingId);
    getBookingFromBookingId(bookingId, setBooking);
  }

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    console.log('Call CART api');
    getBookingDetails(bookingId);
  }, []);

  const history = useHistory();

  const accountpage = () => {
    history.push("/eRestaurant/customeraccount")
  }

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

  return (
    <PageWrapper>
      <TopSectionContainer>
        <BackgroundFilter>
          <NavbarLoggedIn useTransparent />
          <TopSectionInnerContainer>
            <InnerPageContainer>
              <FormContainer>
                <Marginer direction="vertical" margin="2em" />
                <Heading>Your order has been placed successfully.</Heading>
                <InvoiceContainer style={{ marginTop: "-40px" }}>
                  <RowDiv>
                    <SmallColDiv />
                    <ColDiv >
                      <div>Order number: #I00{booking?.id}</div>
                      <div>Date: {(new Date(booking?.dateEpoch)).toLocaleDateString()}</div>
                      <div>Time: {(() => {
                        switch (booking?.timeSlotId) {
                          case 1: return 'Lunch 10:30AM';
                          case 2: return 'Lunch 11:00AM';
                          case 3: return 'Lunch 11:30AM';
                          case 4: return 'Lunch 12:00PM';
                          case 5: return 'Lunch 12:30PM';
                          case 6: return 'Dinner 5:30PM';
                          case 7: return 'Dinner 6:00PM';
                          case 8: return 'Dinner 6:30PM';
                          case 9: return 'Dinner 7:00PM';
                          case 10: return 'Dinner 7:30PM';
                          case 11: return 'Dinner 8:00PM';
                          case 12: return 'Dinner 8:30PM';
                          default: return 'Lunch 10:30AM';
                        }
                      })()}
                      </div>
                      <div>Location: 1B King Road, North Sydney, NSW 2060 </div>
                    </ColDiv>
                  </RowDiv>
                  <Invoice className="print-preview" ref={componentRef} id={bookingId} />
                </InvoiceContainer>
                <SubmitButton onClick={handlePrint} style={{ width: "160px" }}> Print this out!</SubmitButton>
                <Marginer direction="vertical" margin="2em" />
                <SubmitButton onClick={accountpage}>Return to Account Page</SubmitButton>
                <Marginer direction="vertical" margin="2em" />
              </FormContainer>
            </InnerPageContainer>
          </TopSectionInnerContainer>
        </BackgroundFilter>
      </TopSectionContainer>
    </PageWrapper>
  );
}

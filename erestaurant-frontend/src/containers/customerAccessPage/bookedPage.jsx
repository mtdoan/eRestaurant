import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { NavbarLoginRegister } from "../../components/navbar";
import { useReactToPrint } from 'react-to-print';
import { getBooking } from "../../components/utils/client";
import { Invoice } from './invoice';

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

export function BookedPage() {
  const [booking, setBooking] = useState();

  const getBookingDetails = () => {
    getBooking((booking) => setBooking(booking));
  }

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    console.log('Call CART api');
    getBookingDetails();
  }, []);

  console.log("booking", booking?.bookingId);

  return (
    <PageWrapper>
      <NavbarLoginRegister />
      <InnerPageContainer>
        <FormContainer>
          <Heading>Your booking has been placed successfully.</Heading>
          <InvoiceContainer>
            <RowDiv>
              <SmallColDiv />
              <ColDiv >
                <div>Booking number: #00A{booking?.bookingId}</div>
                <div>Date: {(new Date(booking?.dateEpoch)).toLocaleDateString()}</div>
                <div>Time: {(() => {
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
                      default:   return 'Lunch 10:30AM';
                    }
                  })()}
                </div>
                <div>Location: {booking?.restaurantId == 1 ? "1B King Road, Haymarket, NSW 2000" : "21 Macintosh Street, Mascot, NSW 2020" }</div>
              </ColDiv>
            </RowDiv>
            
            <Invoice className="print-preview" ref={componentRef} />
          </InvoiceContainer>
          <button onClick={handlePrint} style={{ width: "160px" }}>Print this out!</button>
          <p/>
          <p>Thank you! </p>
        </FormContainer>
      </InnerPageContainer>
    </PageWrapper>
  );
}

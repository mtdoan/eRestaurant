import React, { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { NavbarLoggedIn } from "../../components/navbar";
import { useReactToPrint } from 'react-to-print';
import { getBookingFromBookingId } from "../../components/utils/client";
import { Invoice } from './invoice';
import { deviceSize } from "../../components/responsive";
import TopSectionBackgroundImg from "../../images/TopSectionBackground.jpeg";
import { Marginer } from "../../components/marginer";
import { useHistory } from "react-router";

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

  const InnerPageContainer = styled.div`
  width: 70%;
  min-height: 70vh;
  flex-direction: column;
  background: #ffffff;
`;

export function BookedPage() {
  const componentRef = useRef();

  const [booking, setBooking] = useState();

  const { bookingId } = useParams();
  console.log("bookingId=",bookingId);

  const getBookingDetails = (bookingId) => {
    console.log("getBookingDetails bookingId=",bookingId);

    getBookingFromBookingId(bookingId, setBooking);
  }

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    console.log('Call CART api');
    getBookingDetails(bookingId);
  }, []);

  console.log("booking =", booking);

  const history = useHistory();

  const accountpage = () => {
    console.log("making an booking");
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
          <NavbarLoggedIn useTransparent/>
          <TopSectionInnerContainer>
            <InnerPageContainer>
              <FormContainer>
                <Marginer direction="vertical" margin="2em"/> 
                <Heading>Thank you, your booking has been placed successfully.</Heading>
                <InvoiceContainer>
                  <RowDiv>
                    <SmallColDiv />
                    <ColDiv >
                      <div>Booking number: #00A{booking?.bookingId}</div>
                      <div>Date: {(new Date(booking?.dateEpoch)).toLocaleDateString()}</div>
                      <div>Time: {(() => {
                          switch (booking?.timeSlotId) {
                            case 1:  return 'Lunch 10:30AM';
                            case 2:  return 'Lunch 11:00AM';
                            case 3:  return 'Lunch 11:30AM';
                            case 4:  return 'Lunch 12:00PM';
                            case 5:  return 'Lunch 12:30PM';
                            case 6:  return 'Dinner 5:30PM';
                            case 7:  return 'Dinner 6:00PM';
                            case 8:  return 'Dinner 6:30PM';
                            case 9:  return 'Dinner 7:00PM';
                            case 10: return 'Dinner 7:30PM';
                            case 11: return 'Dinner 8:00PM';
                            case 12: return 'Dinner 8:30PM';
                            default: return 'Lunch 10:30AM';
                          }
                        })()}
                      </div>
                      <div>Location: {booking?.restaurantId == 1 ? "1B King Road, Haymarket, NSW 2000" : "21 Macintosh Street, Mascot, NSW 2020" }</div>
                    </ColDiv>
                  </RowDiv>
                  <Invoice className="print-preview" ref={componentRef} bookingId={bookingId}/>
                </InvoiceContainer>
                <button onClick={handlePrint} style={{ width: "160px" }}>Print this out!</button>
                <Marginer direction="vertical" margin="2em"/> 
                <SubmitButton onClick={accountpage}>Return to Account Page</SubmitButton>
                <Marginer direction="vertical" margin="2em"/> 
              </FormContainer>
            </InnerPageContainer>
          </TopSectionInnerContainer>
        </BackgroundFilter>
      </TopSectionContainer>
    </PageWrapper>
  );
}

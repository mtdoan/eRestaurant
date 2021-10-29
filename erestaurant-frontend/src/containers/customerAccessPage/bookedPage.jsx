import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { NavbarLoggedIn } from "../../components/navbar";
import { getBookingFromBookingId } from "../../components/utils/client";
import { Marginer } from "../../components/marginer";
import { useHistory } from "react-router";
import { PageWrapper, TopSectionContainer, BackgroundFilter, TopSectionInnerContainer, InnerPageContainer, Heading, SubmitButton,
  FormContainer, BookingContainer, ColDiv, SmallColDiv, RowDiv } from "../../components/commonStyle/commonStyle";
  
export function BookedPage() {
  const [booking, setBooking] = useState();
  const { bookingId } = useParams();

  const getBookingDetails = (bookingId) => {
    getBookingFromBookingId(bookingId, setBooking);
  }

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
                <BookingContainer style={{ marginTop: "-40px" }}>
                  <RowDiv>
                    <SmallColDiv />
                    <ColDiv >
                      <div>Booking number: #B00{booking?.id}</div>
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
                      <div>Number of patrons: {booking?.numberOfPatrons}</div>
                      <div>Location: 1B King Road, </div>
                      <div>North Sydney, NSW 2060</div>
                    </ColDiv>
                  </RowDiv>
                </BookingContainer>
                <SubmitButton onClick={accountpage}>Return to Account Page</SubmitButton>
              </FormContainer>
            </InnerPageContainer>
          </TopSectionInnerContainer>
        </BackgroundFilter>
      </TopSectionContainer>
    </PageWrapper>
  );
}

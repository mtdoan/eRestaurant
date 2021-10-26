import React from "react";
import { NavbarLoggedIn } from "../../components/navbar";
import { Booking } from "../../components/booking/booking";
import { PageWrapper, TopSectionContainer, BackgroundFilter, TopSectionInnerContainer, InnerPageContainer } from "../../components/commonStyle/commonStyle";

export function BookingPage() {
  return (
    <PageWrapper>
      <TopSectionContainer>
        <BackgroundFilter>
        <NavbarLoggedIn useTransparent/>
        <TopSectionInnerContainer>
          <InnerPageContainer>
            <Booking />
        </InnerPageContainer>
        </TopSectionInnerContainer>
        </BackgroundFilter>
      </TopSectionContainer>
    </PageWrapper>
  );
}

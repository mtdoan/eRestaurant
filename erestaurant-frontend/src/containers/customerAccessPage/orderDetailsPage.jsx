import React from "react";
import styled from "styled-components";
import { NavbarLoggedIn } from "../../components/navbar";
import { OrderBooking } from "../../components/booking/orderBooking";
import { PageWrapper, TopSectionContainer, BackgroundFilter, TopSectionInnerContainer, InnerPageContainer } from "../../components/commonStyle/commonStyle";

export function OrderDetailsPage() {
  return (
    <PageWrapper>
      <TopSectionContainer>
        <BackgroundFilter>
          <NavbarLoggedIn useTransparent/>
          <TopSectionInnerContainer>
            <InnerPageContainer>
              <OrderBooking />
            </InnerPageContainer>
          </TopSectionInnerContainer>
        </BackgroundFilter>
      </TopSectionContainer>
    </PageWrapper>
  );
}

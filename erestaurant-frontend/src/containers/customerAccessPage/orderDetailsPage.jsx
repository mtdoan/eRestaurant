import React from "react";
import styled from "styled-components";
import { NavbarLoggedIn } from "../../components/navbar";
import { OrderBooking } from "../../components/booking/orderBooking";
import { deviceSize } from "../../components/responsive";
import TopSectionBackgroundImg from "../../images/TopSectionBackground.jpeg";

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InnerPageContainer = styled.div`
  flex: 1;
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  min-height: 100vh;
  padding: 0.5rem calc((100vw - 2000px) / 2);
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
  background-color: white;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(234, 125, 125, 0.8);
  display: flex;
  flex-direction: column;
`;

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

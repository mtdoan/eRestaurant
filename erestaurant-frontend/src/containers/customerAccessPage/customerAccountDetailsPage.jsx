import React from "react";
import styled from "styled-components";
import { deviceSize } from "../../components/responsive";
import { Navbar } from "../../components/navbar";
import TopSectionBackgroundImg from "../../images/TopSectionBackground.jpeg";

export function CustomerAccountDetailsPage() {
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
  @media screen and (max-width: ${deviceSize.mobile}px) {
    height: 700px;
    background-position: 0px 0px;
  }
`;

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
  background-color: white;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(234, 125, 125, 0.8);
  display: flex;
  flex-direction: column;
`;

  return (
    <PageWrapper>
      <TopSectionContainer>
        <BackgroundFilter>
            <Navbar useTransparent/>
            <TopSectionInnerContainer>
              <h>Account Details</h>
            </TopSectionInnerContainer>
        </BackgroundFilter>
      </TopSectionContainer>
    </PageWrapper>
  );
}

import React from "react";
import styled from "styled-components";
import { NavbarLoggedIn } from "../../components/navbar";
import TopSectionBackgroundImg from "../../images/TopSectionBackground.jpeg";
import { AccountDetails } from "../../components/accountBox/accountDetails";

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

  return (
    <PageWrapper>
      <TopSectionContainer>
        <BackgroundFilter>
          <NavbarLoggedIn useTransparent />
          <TopSectionInnerContainer>
            <InnerPageContainer>
              <AccountDetails />
            </InnerPageContainer>
          </TopSectionInnerContainer>
        </BackgroundFilter>
      </TopSectionContainer>
    </PageWrapper>
  );
}

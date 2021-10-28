import React from "react";
import { NavbarLoggedIn } from "../../components/navbar";
import { AccountDetails } from "../../components/accountBox/accountDetails";
import { PageWrapper, TopSectionContainer, BackgroundFilter, TopSectionInnerContainer, InnerPageContainer} from "../../components/commonStyle/commonStyle";

export function CustomerAccountDetailsPage() {
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

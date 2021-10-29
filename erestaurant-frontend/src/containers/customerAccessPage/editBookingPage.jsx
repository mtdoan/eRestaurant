import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavbarLoggedIn } from "../../components/navbar";
import { Link } from "react-router-dom";
import { getUser } from "../../components/utils/client";
import { EditBooking } from "../../components/booking/editBooking";
import TopSectionBackgroundImg from "../../images/TopSectionBackground.jpeg";
import { PageWrapper, TopSectionContainer, BackgroundFilter, TopSectionInnerContainer, InnerPageContainer } from "../../components/commonStyle/commonStyle";
  

export function EditBookingPage() {
  const [userName, setUserName] = useState("customer");

  const getUserName = () => {
    getUser((user) => setUserName(user.firstName));
  }

  useEffect(() => {
    getUserName();
  }, []);

  return (
    <PageWrapper>
      <TopSectionContainer>
        <BackgroundFilter>
          <NavbarLoggedIn useTransparent/>
          <TopSectionInnerContainer>
            <InnerPageContainer>
              <EditBooking />
            </InnerPageContainer>
          </TopSectionInnerContainer>
        </BackgroundFilter>
      </TopSectionContainer>
    </PageWrapper>
  );
}

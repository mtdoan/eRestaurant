import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavbarOrder } from "../../components/navbar";
import { Link } from "react-router-dom";
import { getUser } from "../../components/utils/client";
import { EditBooking } from "../../components/booking/editBooking";

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

const AnchorLink = styled(Link)`
  color: #000;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  margin: 10px 0 10px 0;
  text-decoration: none;
  font-size: 15px;
  outline: none;
  transition: all 200ms ease-in-out;
  &:hover {
    filter: contrast(0.6);
  }
`;

const MenuTypeContainer = styled.div`
  font-size: 1rem;
  height: 40px;
  display: flex;
  margin-top: 8px;
  margin-bottom: 8px;
  align-items: center;
  background-color: transparent;
`;

export function EditBookingPage() {
  const [userName, setUserName] = useState("customer");

  const getUserName = () => {
    getUser((user) => setUserName(user.firstName));
  }

  useEffect(() => {
    console.log('Call CART api at Booking page');
    getUserName();
  }, []);

  return (
    <PageWrapper>
      <NavbarOrder />
      <InnerPageContainer>
        <MenuTypeContainer>Hello, {userName}</MenuTypeContainer>
        <EditBooking />
      </InnerPageContainer>
    </PageWrapper>
  );
}

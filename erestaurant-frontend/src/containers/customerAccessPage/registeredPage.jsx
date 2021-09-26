import React, { useState } from "react";
import styled from "styled-components";
import LogoImg from "../../images/logos/newLogo.png";
import { Marginer } from "../../components/marginer";
import {
  FormContainer,
  Input
} from "../../components/accountBox/common"
import { NavbarLoginRegister } from "../../components/navbar";
import { Link, useHistory } from "react-router-dom";
import { buildPath } from "../../Paths";

import { submitSignUpForm } from "../../components/utils/client";


const SubmitButton = styled.button`
  padding: 10px;
  width: 150px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgba(205, 2, 36, 0.9); 
  &:focus {
    outline: none;
  }
  &:hover {
    background: #fff;
    color: rgba(205, 2, 36, 0.9);
  }
`;

export function RegisteredPage() {
  const FormContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 50%;
    height: 100%;
  }
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

  const InnerPageContainer = styled.div`
  flex: 1;
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  min-height: 100vh;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

  const Heading = styled.h1`
  color: #000;
`;

const AnchorLink = styled(Link)`
    color: #000;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    margin: 10px 0 10px 0;
  `;
  return (
    <PageWrapper>
      <InnerPageContainer>
        <NavbarLoginRegister />
        <FormContainer>
          <Heading>Congratulation! You've registered successfully.</Heading>
          <p><span><AnchorLink to={buildPath("staff/signin")}>Sign in</AnchorLink></span> to continute</p>
        </FormContainer>
      </InnerPageContainer>
    </PageWrapper>
  );
}

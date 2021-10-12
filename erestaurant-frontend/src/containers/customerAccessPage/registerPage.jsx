import React, { useState } from "react";
import styled from "styled-components";
import {
  FormContainer,
  Input
} from "../../components/accountBox/common"
import { NavbarLoginRegister } from "../../components/navbar";
import { useHistory } from "react-router-dom";
import { submitSignUpForm } from "../../components/utils/client";
import { buildPath } from "../../Paths";


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

export function SignUpForm() {

    return (
      <FormContainer method="post" action="/register">
        <Input placeholder="Email" name="email"/>
        <Input placeholder="First Name" name="firstName"/>
        <Input placeholder="Last Name" name="lastName"/>
        <Input placeholder="Phone Number" name="phoneNumber"/>
        <Input type="password" placeholder="Password" name="password"/>
        <SubmitButton >REGISTER</SubmitButton>
      </FormContainer>
    )
}

export function RegisterPage() {
  const Container = styled.div`
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
  
  return (
    <PageWrapper>
      <NavbarLoginRegister />
      <InnerPageContainer>
        <Container>
          <Heading>Create Account</Heading>
          <SignUpForm />
        </Container>
      </InnerPageContainer>
    </PageWrapper>
  );
}
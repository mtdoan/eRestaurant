import React, { useState } from "react";
import styled from "styled-components";
import {
  FormContainer,
  Input
} from "../../components/accountBox/common"
import { NavbarLoginRegister } from "../../components/navbar";
import { useHistory } from "react-router-dom";
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

function SignUpForm() {

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPasswword] = useState("");
  const history = useHistory();

  const callback = () => {
    console.log("Call back");
    history.push("/eRestaurant/registered");
  }

  const submitSignUpFormHandler = () => {
    submitSignUpForm(email, firstName, lastName, phoneNumber, password, callback );
  };
  return (
    <FormContainer>
      <Input type="text" placeholder="Email*" value={email} onChange={(e) => {
        setEmail(e.target.value);
      }}
      />
      <Input type="text" placeholder="First Name*" value={firstName} onChange={(e) => {
        setFirstName(e.target.value);
      }}
      />
      <Input type="text" placeholder="Last Name*" value={lastName} onChange={(e) => {
        setLastName(e.target.value);
      }}
      />
      <Input type="text" placeholder="Phone number" value={phoneNumber} onChange={(e) => {
        setPhoneNumber(e.target.value);
      }}
      />
      <Input type="password" placeholder="Password*" value={password} onChange={(e) => {
        setPasswword(e.target.value);
      }}
      />
      <SubmitButton type="button" onClick={submitSignUpFormHandler}>Signup</SubmitButton>
    </FormContainer>);
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

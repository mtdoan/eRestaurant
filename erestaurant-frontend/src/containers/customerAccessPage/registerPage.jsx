import React, { useState } from "react";
import styled from "styled-components";
import LogoImg from "../../images/logos/newLogo.png";
import { Marginer } from "../../components/marginer";
import {
  FormContainer,
  Input
} from "../../components/accountBox/common"
import { NavbarLoginRegister } from "../../components/navbar";
import { useHistory, Redirect } from "react-router-dom";
import Axios from "axios";
import { submitSignUpForm } from "../../components/utils/client";
import { HomePagePath } from "../../Paths";


const SubmitButton = styled.button`
  padding: 10px;
  width: 150px;
  color: #ffbe0c;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: #fff; 
  &:focus {
    outline: none;
  }
  &:hover {
    background: #ffbe0c;
    color: #fff;
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
    history.push("/eRestaurant");
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
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton type="button" onClick={submitSignUpFormHandler}>Signup</SubmitButton>
      <Marginer direction="vertical" margin={5} />
    </FormContainer>);
}

export function RegisterPage() {
  const StandoutImage = styled.div`
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
  background: #ffe08c;
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

//   const AnchorLink = styled(Link)`
//   color: #000;
//   cursor: pointer;
//   font-size: 12px;
//   font-weight: 500;
//   margin: 10px 0 10px 0;
// `;

  const Heading = styled.h1`
  color: #ffbb00;
`;
  return (
    <PageWrapper>
      <InnerPageContainer>
        <NavbarLoginRegister useTransparent />
        <div>
          <StandoutImage>
            <img src={LogoImg} alt="Le Bistrot D'Andre Restaurant" />
          </StandoutImage>
          <Heading>Create Account</Heading>
          <SignUpForm />
        </div>
      </InnerPageContainer>
    </PageWrapper>
  );
}

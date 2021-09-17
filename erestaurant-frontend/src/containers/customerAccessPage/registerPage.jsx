import React from "react";
import styled from "styled-components";
import LogoImg from "../../images/logos/newLogo.png";
import { Marginer } from "../../components/marginer";
import {
  FormContainer,
  Input
} from "../../components/accountBox/common"
import { NavbarLoginRegister } from "../../components/navbar";
import { Link } from "react-router-dom";

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

const AnchorLink = styled(Link)`
  color: #000;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  margin: 10px 0 10px 0;
`;

const Heading = styled.h1`
  color: #ffbb00;
`;


  return (
    <PageWrapper>
      <InnerPageContainer>
      <NavbarLoginRegister useTransparent/>
        <div>
          <StandoutImage> 
            <img src={LogoImg} alt="Le Bistrot D'Andre Restaurant" /> 
          </StandoutImage> 
          <Heading>Create Account</Heading>
          <FormContainer>
            <Input placeholder="Email*" />
            <Input placeholder="First Name*" />
            <Input placeholder="Last Name*" />
            <Input placeholder="Phone number" />
            <Input type="password" placeholder="Password*" />
            <Marginer direction="vertical" margin="1em" />
            <SubmitButton>Signup</SubmitButton>
            <Marginer direction="vertical" margin={5} />
          </FormContainer>
        </div>
      </InnerPageContainer>
    </PageWrapper>
  );
}

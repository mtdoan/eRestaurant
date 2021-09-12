import React from "react";
import styled from "styled-components";
import LogoImg from "../../images/logos/newLogo.png";
import { Marginer } from "../../components/marginer";
import {
  FormContainer,
  Input,
  MutedLink,
} from "../../components/accountBox/common"
import { NavbarLoginRegister } from "../../components/navbar";

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #99D2F2;
`;

const InnerPageContainer = styled.div`
  flex: 1;
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  min-height: 70vh;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubmitButton = styled.button`
  padding: 10px;
  width: 150px;
  color: #3baeed;
  font-size: 15px;
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
    background: #74c2ed;
    color: #fff;
  }
`;

export function StaffLoginPage() {
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

  return (
    <PageWrapper>
      <InnerPageContainer>
      <NavbarLoginRegister useTransparent/>
        <div>
          <StandoutImage> 
            <img src={LogoImg} alt="Le Bistrot D'Andre Restaurant" /> 
          </StandoutImage> 
          <FormContainer>
            <Input placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <MutedLink href="#">Forgot Password</MutedLink>
            <Marginer direction="vertical" margin="1em" />
            <SubmitButton >LOGIN</SubmitButton>
            <Marginer direction="vertical" margin={5} />
          </FormContainer>
        </div>
      </InnerPageContainer>
    </PageWrapper>
  );
}

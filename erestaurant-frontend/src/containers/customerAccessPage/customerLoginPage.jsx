import React, { useState } from "react";
import styled from "styled-components";
import LogoImg from "../../images/logos/newLogo.png";
import { Marginer } from "../../components/marginer";
import {
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "../../components/accountBox/common"
import { NavbarLoginRegister } from "../../components/navbar";
import { Link } from "react-router-dom";
import { buildPath } from "../../Paths";
import { submitSignInForm } from "../../components/utils/client";


function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPasswword] = useState("");

  const submitSignInFormHandler = () => {
    submitSignInForm(email, password, () => console.log("OK"));
  };

  const AnchorLink = styled(Link)`
    color: #000;
    cursor: pointer;
    font-size: 12px;
    font-weight: 500;
    margin: 10px 0 10px 0;
  `;

  return (
    <FormContainer>
      <AnchorLink to={buildPath("staff/signin")}>Staff Portal</AnchorLink>
      <Input type="text" placeholder="Email"
        value={email} onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Input type="password" placeholder="Password"
        value={password} onChange={(e) => {
          setPasswword(e.target.value);
        }}
      />
      <MutedLink href="#">Forgot Password</MutedLink>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton onClick={submitSignInFormHandler}>LOGIN</SubmitButton>
      <Marginer direction="vertical" margin={5} />
    </FormContainer>
  )
}

export function LoginPage() {
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
  background: #ff8f80;
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

  return (
    <PageWrapper>
      <InnerPageContainer>
        <NavbarLoginRegister useTransparent />
        <div>
          <StandoutImage>
            <img src={LogoImg} alt="Le Bistrot D'Andre Restaurant" />
          </StandoutImage>
          <SignInForm />
        </div>
      </InnerPageContainer>
    </PageWrapper>

  );
}

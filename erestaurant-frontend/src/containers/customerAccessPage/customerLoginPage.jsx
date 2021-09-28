import React, { useState } from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import {
  FormContainer,
  Input,
  MutedLink,
} from "../../components/accountBox/common"
import { NavbarLoginRegister } from "../../components/navbar";
import { Link } from "react-router-dom";
import { buildPath } from "../../Paths";
import { submitSignInForm } from "../../components/utils/client";
import { useHistory } from "react-router-dom";


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

const AnchorLink = styled(Link)`
    color: #000;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    margin: 10px 0 10px 0;
  `;

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

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPasswword] = useState("");
  const history = useHistory();

  const callback = () => {
    console.log("Call back");
    history.push("/eRestaurant/signedin");
  }

  const submitSignInFormHandler = () => {
    submitSignInForm(email, password, callback);
  };

  return (
    <FormContainer>
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
      <AnchorLink to={buildPath("staff/signin")}>Staff Portal</AnchorLink>

      <Marginer direction="vertical" margin="1em" />
      <SubmitButton type="button" onClick={submitSignInFormHandler}>LOGIN</SubmitButton>
      <Marginer direction="vertical" margin={5} />
    </FormContainer>
  )
}

export function LoginPage() {


  return (
    <PageWrapper>
      <NavbarLoginRegister />
      <InnerPageContainer>
        <Container>
          <Heading>Sign In</Heading>
          <SignInForm />
        </Container>
      </InnerPageContainer>
    </PageWrapper>

  );
}

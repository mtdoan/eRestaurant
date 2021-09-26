import React from "react";
import styled from "styled-components";
import { NavbarLoginRegister } from "../../components/navbar";
import { Link } from "react-router-dom";
import { buildPath } from "../../Paths";

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

import React, { createContext, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { LoginForm } from "./loginForm";
import { AccountContext } from "./context";
import { SignupForm } from "./signupForm";
import { MutedLink } from "./common";
import { SignedInPage } from "./signedInPage";
import { SignedUpPage } from "./signedUpPage";

const BoxContainer = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0px 0px 2.7px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 255px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  position: absolute;
  width: 160%;
  height: 550px;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: #CD0224; 
  background: -webkit-linear-gradient(
    to right,
    rgba(240, 122, 126, 0.9),
    rgb(205, 2, 36)
  ); 
  background: linear-gradient(
    to right,
    rgba(240, 122, 126, 0.9),
    rgb(205, 2, 36)
  ); 
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const HeaderText = styled.h2`
  font-weight: 600;
  color: #fff;
  z-index: 10;
  margin: 0;
  font-size: 30px;
  line-height: 1.24;
`;

const HeaderText2 = styled.h2`
  font-size: 22px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  font-weight: 500;
  color: #fff;
  z-index: 10;
  margin: 0;
  font-size: 13px;
  line-height: 1.24;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.7em;
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export function AccountBox(props) {
  const { initialActive } = props;
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState(
    initialActive ? initialActive : "signin"
  );

  const playExpandingEffect = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchActive = (active) => {
    setTimeout(() => setActive(active), 400);
  };

  const switchToSignup = () => {
    playExpandingEffect();
    switchActive("signup");
  };

  const switchToSignin = () => {
    playExpandingEffect();
    switchActive("signin");
  };

  const switchToSignedInPage = () => {
    playExpandingEffect();
    setTimeout(() => {
      setActive("signedin");
    }, 400);
  };

  const switchToSignedUpPage = () => {
    playExpandingEffect();
    setTimeout(() => {
      setActive("signedup");
    }, 400);
  };

  const contextValue = {
    switchToSignup,
    switchToSignin,
    switchToSignedInPage,
    switchToSignedUpPage,
    playExpandingEffect
  };

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            variants={backdropVariants}
            transition={expandingTransition}
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
          />
          {active === "signin" && (
            <>
              <HeaderContainer>
                <HeaderText>Welcome to</HeaderText>
                <HeaderText2>Le Bistrot d'Andre</HeaderText2>
              </HeaderContainer>
              <SmallText>Please sign-in to continue!</SmallText>
            </>
          )}
          {active === "signup" && (
            <>
              <HeaderContainer>
                <HeaderText>Create </HeaderText>
                <HeaderText>Account</HeaderText>
              </HeaderContainer>
              <SmallText>Please sign-up to continue!</SmallText>
            </>
          )},
          {active === "signedin" && (
            <HeaderContainer>
              <HeaderText>Hello</HeaderText>
              <HeaderText>Again</HeaderText>
              <SmallText>You've signed in!</SmallText>
            </HeaderContainer>
          )}
          {active === "signedup" && (
            <HeaderContainer>
              <HeaderText>Congratulations!</HeaderText>
              <SmallText>You've signed up!</SmallText>
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {active === "signin" && <LoginForm />}
          {active === "signup" && <SignupForm />}
          {active === "signedin" && <SignedInPage />}
          {active === "signedup" && <SignedUpPage />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
}

import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Button } from "../../components/button";
import { Marginer } from "../../components/marginer";
import { deviceSize } from "../../components/responsive";

import TopSectionBackgroundImg from "../../images/TopSectionBackground.jpeg";
import TheSpecialImg from "../../images/TheSpecial.png";

const TopSectionContainer = styled.div`
  width: 100%;
  height: 800px;
  background: url(${TopSectionBackgroundImg}) no-repeat;
  background-position: 0px 0px;
  background-size: cover;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    height: 700px;
    background-position: 0px 0px;
  }
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(234, 125, 125, 0.8);
  display: flex;
  flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StandoutImageRounded = styled.div`
  width: 44em;
  height: 34em;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
  }
`;

const SloganText = styled.h3`
  margin: 0;
  line-height: 1.4;
  color: #fff;
  font-weight: 500;
  font-size: 1.5rem;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 1.5rem;
  }
`;

export function TopSection(props) {
  const { children } = props;

  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <TopSectionContainer>
      <BackgroundFilter>
        {children}
        <TopSectionInnerContainer>
          <LogoContainer>
            <Marginer direction="vertical" margin={8} />
            <SloganText>Find the best dish</SloganText>
            <SloganText>For your meal</SloganText>
            <Marginer direction="vertical" margin={15} />
            <Button>Order Now</Button>
          </LogoContainer>
          {!isMobile && (
            <StandoutImageRounded>
              <img src={TheSpecialImg} alt="The special offer" />
            </StandoutImageRounded>
          )}
        </TopSectionInnerContainer>
      </BackgroundFilter>
    </TopSectionContainer>
  );
}

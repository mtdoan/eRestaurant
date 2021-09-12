import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { deviceSize } from "../../components/responsive";
import TopSectionBackgroundImg from "../../images/TopSectionBackground.jpeg";
import TheSpecialImg from "../../images/TheSpecial.jpg";

const TopSectionContainer = styled.div`
  width: 100%;
  height: 100vh;
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
  margin-top: 20px;
`;

const StandoutImage = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
          {!isMobile && (
            <StandoutImage>
              <img src={TheSpecialImg} alt="The special offer" />
            </StandoutImage>
          )}
        </TopSectionInnerContainer>
      </BackgroundFilter>
    </TopSectionContainer>
  );
}
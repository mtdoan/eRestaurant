import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { deviceSize } from "../../components/responsive";
import TheSpecialImg from "../../images/TheSpecial edited 2.jpg";

import { TopSectionContainer, BackgroundFilter, TopSectionInnerContainer } from "../../components/commonStyle/commonStyle";

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
              <img id="homePromotionalImg" src={TheSpecialImg} alt="The special offer" />
            </StandoutImage>
          )}
        </TopSectionInnerContainer>
      </BackgroundFilter>
    </TopSectionContainer>
  );
}
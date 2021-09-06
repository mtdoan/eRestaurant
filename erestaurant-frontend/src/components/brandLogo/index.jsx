import React from "react";
import styled from "styled-components";
import LogoImg from "../../images/logos/newLogo.png";
import { Link } from "react-router-dom";
import { HomePagePath } from "../../Paths";

const BrandLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.div`
  width: ${({ size }) => (size ? size + "px" : "240px")};
  height: ${({ size }) => (size ? size/6 + "px" : "80px")};

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoTitle = styled.h2`
  margin: 0;
  font-size: ${({ size }) => (size ? size + "px" : "20px")};
  color: ${({ color }) => (color ? color : "#fff")};
  font-weight: 900;
  margin-left: 6px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export function BrandLogo(props) {
  const { logoSize, textSize, color, hideLogo } = props;

  return (
    <BrandLogoContainer>
      {!hideLogo && (
        <Link to={HomePagePath}>
          <LogoImage size={logoSize}>
            <img src={LogoImg} alt="Le Bistrot D'Andre Restaurant" />
          </LogoImage>
        </Link>
      )}
      {/* <StyledLink to="/">
        <LogoTitle size={textSize} color={color}>
          Le Bistrot D'Andre Restaurant
        </LogoTitle>
      </StyledLink> */} 
      {/* can remove later*/}
    </BrandLogoContainer>
  );
}

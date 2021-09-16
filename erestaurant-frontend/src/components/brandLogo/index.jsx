import React from "react";
import styled from "styled-components";
import LogoImg from "../../images/logos/newLogo.png";
import { Link } from "react-router-dom";
import { HomePagePath } from "../../Paths";

const BrandLogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
`;

const LogoImage = styled.div`
  width: ${({ size }) => (size ? size + "px" : "240px")};
  height: ${({ size }) => (size ? size/6 + "px" : "80px")};

  img {
    width: 100%;
    height: 100%;
  }
`;

export function BrandLogo(props) {
  const { logoSize, hideLogo } = props;

  return (
    <BrandLogoContainer id={props.id} >
      {!hideLogo && (
        <Link to={HomePagePath}>
          <LogoImage size={logoSize}>
            <img src={LogoImg} alt="Le Bistrot D'Andre Restaurant" />
          </LogoImage>
        </Link>
      )}
    </BrandLogoContainer>
  );
}

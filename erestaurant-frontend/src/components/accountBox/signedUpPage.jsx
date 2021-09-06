import React from "react";
import { BoxContainer } from "./common";
import { Link } from "react-router-dom";
import { Button } from "../button";
import { HomePagePath } from "../../Paths"; 

export function SignedUpPage(props) {

  return (
    <BoxContainer>
      You've signed up successfully!
      <Link to={HomePagePath}>
          <Button size={11}>Back to mainpage</Button>
      </Link>
    </BoxContainer>
  );
}

import React from "react";
import { BoxContainer } from "./common";
import { Link } from "react-router-dom";
import { Button } from "../button";

export function SignedUpPage(props) {

  return (
    <BoxContainer>
      You've signed up successfully!
      <Link to="/">
          <Button size={11}>Back to mainpage</Button>
      </Link>
    </BoxContainer>
  );
}

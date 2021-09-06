import React from "react";
import { BoxContainer } from "./common";
import { Link } from "react-router-dom";
import { Button } from "../button";

export function SignedInPage(props) {

  return (
    <BoxContainer>
      You've signed in!
      <Link to="/">
          <Button size={11}>Back to mainpage</Button>
      </Link>
    </BoxContainer>
  );
}

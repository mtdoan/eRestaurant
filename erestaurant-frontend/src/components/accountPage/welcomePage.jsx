import React from "react";
import { BoxContainer, MutedLink } from "./common";

export function WelcomePage(props) {

  return (
    <BoxContainer>
      You've signed in!
      <MutedLink href="#">
        Back to mainpage
      </MutedLink>
    </BoxContainer>
  );
}

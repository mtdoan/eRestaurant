import React from "react";
import { BoxContainer, MutedLink } from "./common";

export function SignUpPage(props) {

  return (
    <BoxContainer>
      You've signed up successfully!
      <MutedLink href="#">
        Back to mainpage
      </MutedLink>
    </BoxContainer>
  );
}

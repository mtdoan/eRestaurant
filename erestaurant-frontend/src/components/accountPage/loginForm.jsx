import React, { useState, useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function LoginForm({Login, error}) {

  const [details, setDetails] = useState( {email: "", password: ""});

  const submitHandler = e => {
    e.preventDefault();

    Login(details);
  }

  const { switchToSignup } = useContext(AccountContext);
  const { switchToWelcomePage } = useContext(AccountContext);

  return (
    <BoxContainer onSubmit={submitHandler}>
      <FormContainer>
        <Input type="email" placeholder="Email"  id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
        <Input type="password" placeholder="Password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={switchToWelcomePage}>Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}

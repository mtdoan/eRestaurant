import React, { useState } from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import {
  FormContainer,
  // Input,
  MutedLink
} from "../../components/accountBox/common"
import { NavbarLoginRegister } from "../../components/navbar";
import { Link } from "react-router-dom";
import { buildPath } from "../../Paths";
import { submitSignInForm } from "../../components/utils/client";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    width: '50%',
    margin: '5% 0 0 25%',
    '& > *': {
      marginTop: 20
    }
  }
})

const SubmitButton = styled.button`
  padding: 10px;
  margin: auto;
  width: 150px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgba(205, 2, 36, 0.9); 
  &:focus {
    outline: none;
  }
  &:hover {
    background: #fff;
    color: rgba(205, 2, 36, 0.9);
  }
`;

const AnchorLink = styled(Link)`
    color: #000;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    margin: 10px 0 10px 0;
  `;

const Container = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 50%;
    height: 100%;
  }
`;

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 0;
  margin: 0;
  flex-direction: column;
  align-items: center;
  background: #fff;
`;

const InnerPageContainer = styled.div`
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  min-height: 100vh;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  `;

const Heading = styled.h1`
  color: #000;
  `;

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPasswword] = useState("");
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const callback = () => {
    console.log("Call back");
    history.push("/eRestaurant/signedin");
  }

  const submitSignInFormHandler = () => {
    submitSignInForm(email, password, callback);
  };

  return (
    <FormContainer>
      <Input type="text" placeholder="Email"
        value={email} onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <div className="text-danger">{errors.email}</div>
      <Input type="password" placeholder="Password"
        value={password} onChange={(e) => {
          setPasswword(e.target.value);
        }}
      />
      <div className="text-danger">{errors.password}</div>
      <MutedLink href="#">Forgot Password</MutedLink>
      <AnchorLink to={buildPath("staff/signin")}>Staff Portal</AnchorLink>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton type="button" onClick={submitSignInFormHandler}>LOGIN</SubmitButton>
      <Marginer direction="vertical" margin={5} />
    </FormContainer>
  )
}



export function LoginPage() {
  return (
    <PageWrapper>
      <NavbarLoginRegister />
      {/* <InnerPageContainer> */}
        {/* <Container> */}
          {/* <SignInForm /> */}
          <Validate />
        {/* </Container> */}
      {/* </InnerPageContainer> */}
    </PageWrapper>

  );
}

function Validate() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;
  const history = useHistory();
  const classes = useStyles();

  const callback = () => {
    console.log("Call back");
    history.push("/eRestaurant/signedin");
  }

  function onSubmit() {
    submitSignInForm(email, password, callback);
  }

  return (
    <FormGroup className={classes.container}>
      <Heading>Sign In</Heading>
      <FormControl >
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input 
          type="text" {...register('email')}
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}

        />
      </FormControl>
      <div className="invalid-feedback">{errors.email?.message}</div>

      <FormControl>
        <InputLabel htmlFor="my-input">Password</InputLabel>
        <Input
          name="password"
          type="password"
          {...register('password')}
          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </FormControl>
      <div className="invalid-feedback">{errors.password?.message}</div>
      <MutedLink href="#">Forgot Password</MutedLink>
      <AnchorLink to={buildPath("staff/signin")}>Staff Portal</AnchorLink>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton type="button" onClick={handleSubmit(onSubmit)}>LOGIN</SubmitButton>
      <Marginer direction="vertical" margin={5} />
    </FormGroup>

  )
}

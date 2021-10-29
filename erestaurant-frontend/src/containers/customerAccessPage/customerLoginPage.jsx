import React, { useState } from "react";
import styled from "styled-components";
import { NavbarLoginRegister } from "../../components/navbar";
import { buildPath } from "../../Paths";
import { submitSignInForm } from "../../components/utils/client";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FormGroup, FormControl, InputLabel, Input, makeStyles } from '@material-ui/core';
import { Marginer } from "../../components/marginer";
import { PageWrapper, BackgroundFilter, TopSectionContainer, TopSectionInnerContainer, Heading, AnchorLink } from "../../components/commonStyle/commonStyle";

const InnerPageContainer = styled.div`
  width: 70%;
  min-height: 70vh;
  flex-direction: column;
  background: #ffffff;
`;


const SubmitButton = styled.button`
  padding: 10px;
  width: 150px;
  margin: auto;
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

const useStyles = makeStyles({
  container: {
    width: '50%',
    margin: '5% 0 0 25%',
    '& > *': {
      marginTop: 20
    }
  }
})

function SignInForm() {
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
    history.push("/eRestaurant/customeraccount");
  }

  function onSubmit() {
    try {
      submitSignInForm(email, password, callback);
    } catch (error) {
    }
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
      <div
        className="invalid-feedback"
        style={{ color: "rgba(205, 2, 36, 0.9)" }}
      >
        {errors.email?.message}
      </div>

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
      <div
        className="invalid-feedback"
        style={{ color: "rgba(205, 2, 36, 0.9)" }}
      >
        {errors.password?.message}
      </div>
      <AnchorLink to={buildPath("staff/signin")}>Staff Portal</AnchorLink>
      <SubmitButton type="button" onClick={handleSubmit(onSubmit)}>LOGIN</SubmitButton>
    </FormGroup>
  )
}

export function LoginPage() {



  return (
    <PageWrapper>
      <TopSectionContainer>
        <BackgroundFilter>
          <NavbarLoginRegister useTransparent />
          <TopSectionInnerContainer>
            <InnerPageContainer>
              <SignInForm />
              <Marginer direction="vertical" margin="3em" />
            </InnerPageContainer>
          </TopSectionInnerContainer>
        </BackgroundFilter>
      </TopSectionContainer>
    </PageWrapper>
  );
}

import React, { useState } from "react";
import styled from "styled-components";
import {
  FormContainer
} from "../../components/accountBox/common"
import { NavbarLoginRegister } from "../../components/navbar";
import { useHistory } from "react-router-dom";
import { submitSignUpForm } from "../../components/utils/client";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FormGroup, FormControl, InputLabel, Input, makeStyles } from '@material-ui/core';
import { deviceSize } from "../../components/responsive";
import TopSectionBackgroundImg from "../../images/TopSectionBackground.jpeg";
import { Marginer } from "../../components/marginer";

const useStyles = makeStyles({
  container: {
    width: '50%',
    margin: '5% 0 0 25%',
    '& > *': {
      marginTop: 20
    }
  }
})

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 0;
  margin: 0;
  flex-direction: column;
  align-items: center;
  background: #fff;
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

const Heading = styled.h1`
  color: #000;
`;

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const history = useHistory();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    firstName: Yup.string()
      .required('First Name is required'),
    lastName: Yup.string()
      .required('Last name is required'),
    phoneNumber: Yup.string()
      .required('Phone Number is required')
      .min(9, 'Phone Number is invalid'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required')
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;
  const classes = useStyles();

  const callback = () => {
    console.log("Call back");
    history.push("/eRestaurant/customeraccount");
  }

  function onSubmit() {
    submitSignUpForm(email, firstName, lastName, phoneNumber, password, callback);
    console.log("finished");
  }

  return (
    <FormGroup className={classes.container}>
      <Heading>Create Account New</Heading>
      <FormControl >
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input
          type="text" 
          {...register('email')}
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

      <FormControl >
        <InputLabel htmlFor="my-input">First Name</InputLabel>
        <Input
          type="text" 
          {...register('firstName')}
          className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
          placeholder="First Name"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </FormControl>
      <div
        className="invalid-feedback"
        style={{ color: "rgba(205, 2, 36, 0.9)" }}
      >
        {errors.firstName?.message}
      </div>

      <FormControl >
        <InputLabel htmlFor="my-input">Last Name</InputLabel>
        <Input
          type="text" 
          {...register('lastName')}
          className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </FormControl>
      <div
        className="invalid-feedback"
        style={{ color: "rgba(205, 2, 36, 0.9)" }}
      >
        {errors.lastName?.message}
      </div>

      <FormControl >
        <InputLabel htmlFor="my-input">Phone number</InputLabel>
        <Input
          type="text" 
          {...register('phoneNumber')}
          className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
          placeholder="Phone number"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
      </FormControl>
      <div
        className="invalid-feedback"
        style={{ color: "rgba(205, 2, 36, 0.9)" }}
      >
        {errors.phoneNumber?.message}
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

      <FormControl>
        <InputLabel htmlFor="my-input">Confirm Password</InputLabel>
        <Input
          name="password"
          type="password"
          {...register('confirmPassword')}
          className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
          placeholder="Password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
      </FormControl>
      <div
        className="invalid-feedback"
        style={{ color: "rgba(205, 2, 36, 0.9)" }}
      >
        {errors.confirmPassword?.message}
      </div>

      <SubmitButton type="button" onClick={handleSubmit(onSubmit)}>Signup</SubmitButton>
    </FormGroup>
  )
}

export function RegisterPage() {

  const TopSectionContainer = styled.div`
    width: 100%;
    height: 100vh;
    background: url(${TopSectionBackgroundImg}) no-repeat;
    background-position: 0px 0px;
    background-size: cover;
    @media screen and (max-width: ${deviceSize.mobile}px) {height: 700px; background-position: 0px 0px;}
  `;

  const TopSectionInnerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    //margin-top: 20px;
    background-color: white;
  `;

  const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(234, 125, 125, 0.8);
    display: flex;
    flex-direction: column;
  `;

  const InnerPageContainer = styled.div`
    width: 70%;
    min-height: 70vh;
    flex-direction: column;
    background: #ffffff;
  `;

  return (
    <PageWrapper>
      <TopSectionContainer>
        <BackgroundFilter>
        <NavbarLoginRegister useTransparent/>
        <TopSectionInnerContainer>
          <InnerPageContainer>
            <SignUpForm />
            <Marginer direction="vertical" margin="3em"/> 
          </InnerPageContainer>
        </TopSectionInnerContainer>
        </BackgroundFilter>
      </TopSectionContainer>
    </PageWrapper>
  );
}

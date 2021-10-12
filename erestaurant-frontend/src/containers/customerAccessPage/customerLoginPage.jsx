import React from "react";
import styled from "styled-components";
import {
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
import { FormGroup, FormControl, InputLabel, Input, makeStyles } from '@material-ui/core';

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

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 0;
  margin: 0;
  flex-direction: column;
  align-items: center;
  background: #ff8f80;
`;

const Heading = styled.h1`
  color: #000;
`;

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
      <MutedLink href="#">Forgot Password</MutedLink>
      <AnchorLink to={buildPath("staff/signin")}>Staff Portal</AnchorLink>
      <SubmitButton type="button" onClick={handleSubmit(onSubmit)}>LOGIN</SubmitButton>
    </FormGroup>
  )
}

export function LoginPage() {
  return (
    <PageWrapper>
      <NavbarLoginRegister />
      <SignInForm />
    </PageWrapper>
  );
}
// Ok I realised I couldnt comment in the HTML that is returned above, but basically I modified
// line 66 to make it such that when the form is submitted, the request method is POST and the path is /login 
// (look at server.js for the handler for that specific method and path)
// I then added a name attribute to the email and password input fields (lines 68 and 69 (nice) respectively)
// these are needed for the express.urlencoded parser (see server.js) to know what name to give to the attributes of the request body
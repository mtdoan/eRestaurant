import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { submitStaffForm } from "../../components/utils/client";
import styled from "styled-components";
import { deviceSize } from "../../components/responsive";
import TopSectionBackgroundImg from "../../images/TopSectionBackground.jpeg";
import { NavbarLoggedInStaff } from '../../components/navbar';
import { Marginer } from '../../components/marginer';

const useStyles = makeStyles({
  container: {
    width: '50%',
    margin: '5% 0 0 25%',
    '& > *': {
      marginTop: 20
    }
  }
})

function AddForm() {
  const [staff, setStaff] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    position: "",
    restaurantId: ""
  });
  const history = useHistory();

  const callback = () => {
    console.log("Call back");
    history.push("/eRestaurant/staff/list");
  }

  const submitStaffFormHandler = () => {
    console.log("staff.firstName", staff.firstName);

    submitStaffForm(staff.firstName, staff.lastName, staff.email, staff.password, staff.phoneNumber, staff.position, staff.restaurantId, callback );
  };

  const onValueChange = (e) => {
    console.log("changing ...", e.target.value);
    setStaff({...staff, [e.target.name]: e.target.value})
  } 

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

  const classes = useStyles();

  return (
    <TopSectionContainer>
      <BackgroundFilter>
        <NavbarLoggedInStaff useTransparent/>
        <TopSectionInnerContainer>
          <InnerPageContainer>
            <FormGroup className={classes.container}>
            <Typography variant="h4">Add a new staff</Typography>
              <FormControl>
                <InputLabel htmlFor="my-input">First Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='firstName' id="my-input" aria-describedby="my-helper-text" />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="my-input">Last Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='lastName' id="my-input" aria-describedby="my-helper-text" />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' id="my-input" aria-describedby="my-helper-text" />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="my-input">Password</InputLabel>
                <Input onChange={(e) => onValueChange(e)} type="password" name='password' id="my-input" aria-describedby="my-helper-text" />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="my-input">Phone Number</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phoneNumber' id="my-input" aria-describedby="my-helper-text" />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="my-input">Position</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='position' id="my-input" aria-describedby="my-helper-text" />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="my-input">Restaurant ID</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='restaurantId' id="my-input" aria-describedby="my-helper-text" />
              </FormControl>
              <FormControl>
                <SubmitButton type="button" variant="contained" color="primary" onClick={submitStaffFormHandler}>Save</SubmitButton>
              </FormControl>
            </FormGroup>
            <Marginer direction="vertical" margin="2em"/> 
          </InnerPageContainer> 
        </TopSectionInnerContainer>
      </BackgroundFilter>
    </TopSectionContainer>
  );
}

export const AddStaff = (props) => {
  return (
    <AddForm/>
  )
}

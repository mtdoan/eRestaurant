import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { submitStaffForm } from "../../components/utils/client";
import { PageWrapper, TopSectionContainer, BackgroundFilter, TopSectionInnerContainer, Heading } from "../../components/commonStyle/commonStyle";
import styled from "styled-components";
import { Navbar } from "../../components/navbar";

const useStyles = makeStyles({
  container: {
    width: '50%',
    margin: '5% 0 0 25%',
    '& > *': {
      marginTop: 20
    }
  }
})

export const InnerPageContainer = styled.div`
  width: 100%;
  min-height: 100%;
  align-items: center;
  margin-top: -90px;
`;

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
    submitStaffForm(staff.firstName, staff.lastName, staff.email, staff.password, staff.phoneNumber, staff.position, staff.restaurantId, callback);
  };

  const onValueChange = (e) => {
    setStaff({ ...staff, [e.target.name]: e.target.value })
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
    <PageWrapper>
      <TopSectionContainer>
        <BackgroundFilter>
          <Navbar useTransparent />
          <TopSectionInnerContainer>
            <InnerPageContainer>
              <FormGroup className={classes.container}>
                <Heading>Add a new staff</Heading>
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
                  <Button type="button" variant="contained" color="primary" onClick={submitStaffFormHandler}>Save</Button>
                </FormControl>
              </FormGroup>
            </InnerPageContainer>
          </TopSectionInnerContainer>
        </BackgroundFilter>
      </TopSectionContainer>
    </PageWrapper>
  );

}

export const AddStaff = () => {
  return (
    <AddForm />
  )
}

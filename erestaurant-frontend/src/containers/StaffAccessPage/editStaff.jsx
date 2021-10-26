import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { getStaff, editStaff } from "../../components/utils/client";
import { deviceSize } from "../../components/responsive";
import TopSectionBackgroundImg from "../../images/TopSectionBackground.jpeg";
import styled from "styled-components";
import { NavbarLoggedInStaff } from '../../components/navbar';

const useStyles = makeStyles({
  container: {
    width: '50%',
    margin: '5% 0 0 25%',
    '& > *': {
      marginTop: 20
    }
  }
})

export const EditStaff = () => {
  const [staff, setStaff] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    position: "",
    restaurantId: ""
  });

  const { staffId } = useParams();
  console.log("current id = ", staffId);

  const classes = useStyles();
  let history = useHistory();

  const getStaffDetails = (staffId) => {
    getStaff(staffId, setStaff);
  }

  useEffect(() => {
    getStaffDetails(staffId);
  }, []);

  const callback = () => {
    console.log("Call back editUserDetails");
    history.push("/eRestaurant/staff/list");
  }

  const editUserDetails = (staffId) => {
    console.log("editUserDetails");
    editStaff(staffId, staff.firstName, staff.lastName, staff.phoneNumber, staff.position, staff.restaurantId, callback);
  }

  const onValueChange = (e) => {
    console.log("changing ...", e.target.value);
    setStaff({...staff, [e.target.name]: e.target.value})
  }

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

  return (
    <TopSectionContainer>
      <BackgroundFilter>
        <NavbarLoggedInStaff useTransparent/>
        <TopSectionInnerContainer>
          <InnerPageContainer>
          <FormGroup className={classes.container}>
            <Typography variant="h4">Edit Staff Information</Typography>
            <FormControl>
              <InputLabel htmlFor="my-input">First Name</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name='firstName' value={staff.firstName} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>              <FormControl>
              <InputLabel htmlFor="my-input">Last Name</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name='lastName' value={staff.lastName} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="my-input">Email</InputLabel>
              <Input name='email' value={staff.email} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="my-input">Phone Number</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name='phoneNumber' value={staff.phoneNumber} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="my-input">Position</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name='position' value={staff.position} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="my-input">Restaurant ID</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name='restaurantId' value={staff.restaurantId} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
              <FormControl>
              <SubmitButton type="button" variant="contained" color="primary" onClick={() => editUserDetails(staffId)}>Save</SubmitButton>
            </FormControl>
          </FormGroup>
          </InnerPageContainer>
        </TopSectionInnerContainer>
      </BackgroundFilter>
    </TopSectionContainer>
  )
}

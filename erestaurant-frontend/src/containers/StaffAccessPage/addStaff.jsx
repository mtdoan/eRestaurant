import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { submitStaffForm } from "../../components/utils/client";


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

  const classes = useStyles();

  return (
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
        <Button type="button" variant="contained" color="primary" onClick={submitStaffFormHandler}>Save</Button>
      </FormControl>
     </FormGroup>);
}

export const AddStaff = (props) => {
  return (
    <AddForm/>
  )
}

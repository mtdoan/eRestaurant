import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { getStaff, editStaff } from "../../components/utils/client";

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

  return (

    <FormGroup className={classes.container}>
      <Typography variant="h4">Edit Staff Information</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">First Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='firstName' value={staff.firstName} id="my-input" aria-describedby="my-helper-text" />
      </FormControl>
      <FormControl>
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
        <Button type="button" variant="contained" color="primary" onClick={() => editUserDetails(staffId)}>Save</Button>
      </FormControl>
    </FormGroup>
  )
}

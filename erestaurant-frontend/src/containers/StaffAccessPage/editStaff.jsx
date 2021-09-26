// import React, { useState, useContext, useEffect } from 'react';
// import { useHistory, useParams } from 'react-router-dom';
// import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';

// const initialValue = {
//    email = '',
//    firstName = '',
//    lastName = '',
//    phoneNumber = '',
//    position = '',
//    restaurantId = ''
// }

// const useStyles = makeStyles({
//   container: {
//       width: '50%',
//       margin: '5% 0 0 25%',
//       '& > *': {
//           marginTop: 20
//       }
//   }
// })

// export const EditStaff = () => {
//   const [user, setUser] = useState(initialValue);
//   const { name, username, email, phone } = user;
//   const { id } = useParams();
//   const classes = useStyles();
//   let history = useHistory();

//   useEffect(() => {
//     loadUserDetails();
//   }, []);

//   const loadUserDetails = async() => {
//       // const response = await getUsers(id);
//       // setUser(response.data);
//   }

//   const editUserDetails = async() => {
//       // const response = await editUser(id, user);
//       // history.push('/all');
//   }

//   const onValueChange = (e) => {
//       // console.log(e.target.value);
//       // setUser({...user, [e.target.name]: e.target.value})
//   }

//   return (
//     <FormGroup className={classes.container}>
//             <Typography variant="h4">Edit Staff Information</Typography>
//             <FormControl>
//                 <InputLabel htmlFor="my-input">First Name</InputLabel>
//                 <Input onChange={(e) => onValueChange(e)} name='firstName' value={name} id="my-input" aria-describedby="my-helper-text" />
//             </FormControl>
//             <FormControl>
//                 <InputLabel htmlFor="my-input">Last Name</InputLabel>
//                 <Input onChange={(e) => onValueChange(e)} name='lastName' value={name} id="my-input" aria-describedby="my-helper-text" />
//             </FormControl>
//             <FormControl>
//                 <InputLabel htmlFor="my-input">Position</InputLabel>
//                 <Input onChange={(e) => onValueChange(e)} name='position' value={username} id="my-input" aria-describedby="my-helper-text" />
//             </FormControl>
//             <FormControl>
//                 <InputLabel htmlFor="my-input">Email</InputLabel>
//                 <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" aria-describedby="my-helper-text" />
//             </FormControl>
//             <FormControl>
//                 <InputLabel htmlFor="my-input">Phone Number</InputLabel>
//                 <Input onChange={(e) => onValueChange(e)} name='phoneNumber' value={phone} id="my-input" aria-describedby="my-helper-text" />
//             </FormControl>
//             <FormControl>
//                 <InputLabel htmlFor="my-input">Restaurant ID</InputLabel>
//                 <Input onChange={(e) => onValueChange(e)} name='restaurantId' value={phone} id="my-input" aria-describedby="my-helper-text" />
//             </FormControl>
//             <FormControl>
//                 <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Save</Button>
//             </FormControl>
//         </FormGroup>
//   )
// }

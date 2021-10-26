import express from "express";
// import mysql from "mysql";
import cookieParser from "cookie-parser";
import session from "express-session";

import {
  listDishesHandler,
  getDishHandler,
  getCartItemsByUserIdHandler,
  addItemToCartHandler,
  deleteItemFromCartHandler,
} from "./dish_apis.js";

import {
  getBookingFromBookingIdHandler,
  getNewBookingIdHandler,
  createNewBookingHander,
  getItemsFromBookingHander,
  editBookingHander,
  listUserBookingHander,
  listUserOrderHander
} from "./booking_apis.js";

import {
  addNewUser,
  userSignIn,
  getUserFromCookies,
  logout
} from "./user_apis.js";

import {
  listStaff,
  getStaffFromId,
  addStaff,
  deleteStaff,
  editStaff,
  staffSignIn,
  getStaffFromCookies
} from "./staff_apis.js";

import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(cors({ origin: 'http://localhost:3000' }));

app.use(session({ 		
  secret: 'secretkey',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

// Logout APIs
app.get("/logout", logout);

// User sign in APIs
app.post("/register", addNewUser);

app.post("/signin", userSignIn);


// User APIs 

app.get("/myAccount", getUserFromCookies); // get User From cookie

// Dish APIs 
app.get("/dishes", listDishesHandler);

app.get("/dishes/:dishId", getDishHandler);

app.get("/cartItems", getCartItemsByUserIdHandler); //list cart items for current user 

app.post("/cartItems/add/:dishId", addItemToCartHandler); //add item to cart

app.post("/cartItems/del/:dishId", deleteItemFromCartHandler); //delete item from cart

// Booking APIs 
app.get("/order/list", listUserOrderHander); //list all orders of current user

app.get("/booking/list", listUserBookingHander); //list all bookings of current user

app.get("/booking/:bookingId", getBookingFromBookingIdHandler); // get Booking From BookingId

app.get("/createBookingId", getNewBookingIdHandler); // get new BookingId

app.post("/booking", createNewBookingHander); //submit a booking form

app.get("/booking/cart/:bookingId", getItemsFromBookingHander); //get items from booking

app.post("/booking/edit/:bookingId", editBookingHander); //get items from booking

// Staff APIs 
app.get("/staff/list", listStaff); // list all Staff 

app.get("/staff/:staffId", getStaffFromId); // get Staff From StaffId

app.get("/staff/myAccount", getStaffFromCookies); // get current Staff 

app.post("/staff/add", addStaff); //add a new staff

app.post("/staff/del/:staffId", deleteStaff); //delete staff

app.post("/staff/edit/:staffId", editStaff); //edit staff

app.post("/staff/signin", staffSignIn);


// Start the server and have it listen to port 5000
app.listen(5000, () => console.log("Listening on port 5000"))

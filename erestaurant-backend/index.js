import express from "express";
import mysql from "mysql";

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
  editBookingHander
} from "./booking_apis.js";

import {
  getUserFromId,
  getUserId1
} from "./user_apis.js";

import {
  listStaff,
  getStaffFromId,
  addStaff,
  deleteStaff,
  editStaff
} from "./staff_apis.js";

import {
  getAllInvoices
} from "./invoice_apis.js";

import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors({ origin: 'http://localhost:3000' }));

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "studio1agroup2",
  database: "MMOCCD"
});

con.connect(function (err) {
  if (err) throw err;
  console.log('Connected');
});

app.post("/signin", (req, res) => {
  console.log(req.body)
  const email = req.body.email; 
  const password = req.body.password; 
  if (email && password) {
    con.query('SELECT * FROM Customer WHERE customerEmail = ? AND customerPassword = ?', [email, password], function (error, results, fields) { //retrieve customer account that matches username and password
      if (results.length > 0) { 
        res.sendStatus(200);
      } else {
        res.sendStatus(401);
      }
    });
  } else {
    res.sendStatus(401);
  }
})

app.post("/register", (req, res) => {
  let { email, firstName, lastName, phoneNumber, password } = req.body
  console.log(req.body)
  let query = `INSERT INTO Customer (customerFname, customerLname, customerEmail, customerPassword, customerPhoneNumber) VALUES ('${firstName}', '${lastName}', '${email}', '${password}', ${phoneNumber})`
  try {
    con.query(query)
    console.log(`${firstName}'s details added to database.'`)
    con.query("SELECT * FROM Customer", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error.message)
    res.status(422).send(error.message)
  }
  res.sendStatus(401);
})

// User APIs 
app.get("/user/:userId", getUserFromId); // get User From UserId

app.get("/myAccount", getUserId1); // get User From UserId

// Dish APIs 
app.get("/dishes", listDishesHandler);

app.get("/dishes/:dishId", getDishHandler);

app.get("/cartItems", getCartItemsByUserIdHandler); //list cart items for current user 

app.post("/cartItems/add/:dishId", addItemToCartHandler); //add item to cart

app.post("/cartItems/del/:dishId", deleteItemFromCartHandler); //delete item from cart

// Booking APIs 
app.get("/booking/:bookingId", getBookingFromBookingIdHandler); // get Booking From BookingId

app.get("/createBookingId", getNewBookingIdHandler); // get new BookingId

app.post("/booking", createNewBookingHander); //submit a booking form

app.get("/booking/cart/:bookingId", getItemsFromBookingHander); //get items from booking

app.post("/booking/edit/:bookingId", editBookingHander); //get items from booking


// Staff APIs 
app.get("/staff/list", listStaff); // list all Staff 

app.get("/staff/:staffId", getStaffFromId); // get Staff From StaffId

app.post("/staff/add", addStaff); //add a new staff

app.post("/staff/del/:staffId", deleteStaff); //delete staff

app.post("/staff/edit/:staffId", editStaff); //edit staff

// Invoice APIs
app.get("/invoice/all", getAllInvoices); // get all invoices of current user 

// Start the server and have it listen to port 5000
app.listen(5000, () => console.log("Listening on port 5000"))
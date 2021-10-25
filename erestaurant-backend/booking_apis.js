import { bookings } from "./data/bookings.js";
import { cartItems } from "./data/cartItems.js"

export const createNewBookingHander = (req, res) => {
  let userId = req.session.userid;
  let bookingId = bookings[bookings.length - 1].id + 1;

  let cart = [];
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].user.id == userId) {
      cart.push(cartItems[i]);
    }
  }

  let newBooking = {
    "id": bookingId,
    "userId": userId,
    "cartItems": cart,
    "restaurantId": req.body.restaurantId,
    "numberOfPatrons": req.body.numberOfPatrons,
    "dateEpoch": req.body.dateEpoch,
    "timeSlotId": req.body.timeSlotId
  }
  bookings.push(newBooking);
  res.send({"bookingId": bookingId});
};

export const getBookingFromBookingIdHandler = (req, res) => {
  let bookingId = req.params.bookingId;
  let booking = getBookingFromBookingId(bookingId);
  if (booking == null) {
    res.sendStatus(404);
    return;
  }
  res.send(booking);
};

export const getNewBookingIdHandler = (req, res) => {
  res.send({"id": bookings[bookings.length - 1].id + 1 });
};


export const getItemsFromBookingHander = (req, res) => {
  let bookingId = req.params.bookingId;
  let booking = getBookingFromBookingId(bookingId);
  if (booking == null) {
    res.sendStatus(404);
    return;
  }
  console.log("booking.cartItems=", booking.cartItems);
  res.send(booking.cartItems);
};

export const editBookingHander = (req, res) => {
  for (let i = 0; i < bookings.length; i++) {
    if (bookings[i].id == req.params.bookingId) {
      bookings[i] = {
        ...bookings[i],
        "restaurantId": req.body.restaurantId,
        "numberOfPatrons": req.body.numberOfPatrons,
        "dateEpoch": req.body.dateEpoch,
        "timeSlotId": req.body.timeSlotId
      }
      res.sendStatus(200);
      return;
    }
  }
  res.sendStatus(401);
};

export const listUserBookingHander = (req, res) => {
  let userId = req.session.userid;
  console.log("req.session.userid=", req.session.userid)
  let bookingList = [];
  for (let i = 0; i < bookings.length; i++) {
    if (bookings[i].userId == userId && bookings[i].cartItems.length == 0) {
      bookingList.push(bookings[i])
    }
  }
  res.send(bookingList);
};

export const listUserOrderHander = (req, res) => {
  let userId = req.session.userid;
  console.log("req.session.userid=", req.session.userid)
  let orderList = [];
  for (let i = 0; i < bookings.length; i++) {
    if (bookings[i].userId == userId && bookings[i].cartItems.length > 0) {
      orderList.push(bookings[i])
    }
  }
  res.send(orderList);
};

//functions
export const getBookingFromBookingId = (bookingId) => {
  for (let i = 0; i < bookings.length; i++) {
    if (bookings[i].id == bookingId) {
      return bookings[i];
    }
  }
  return null;
};


import { bookings } from "./data/bookings.js";
import { cartItems } from "./data/cartItems.js"

export const createNewBookingHander = (req, res) => {
  let userId = 0;
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
  console.log("req.body.restaurantId", req.body.restaurantId);
  console.log("req.body.timeSlotId", req.body.timeSlotId);
  console.log(cart);
  console.log(newBooking);
  res.send({"bookingId" :bookingId});

  // res.sendStatus(200);
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
  res.send(booking.cartItems);
};

//functions
const getBookingFromBookingId = (bookingId) => {
  for (let i = 0; i < bookings.length; i++) {
    if (bookings[i].id == bookingId) {
      return bookings[i];
    }
  }
  return null;
};


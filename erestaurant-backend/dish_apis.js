import { dishes } from "./data/dishes.js"
import { cartItems } from "./data/cartItems.js"
import { users } from "./data/users.js"

export const listDishesHandler = (req, res) => {
  res.send( dishes );
};

export const getDishHandler = (req, res) => {
  for (let i = 0; i < dishes.length; i++) {
    if (dishes[i].id == req.params.dishId) {
      res.send(dishes[i]);
      return;
    }
  }
  res.sendStatus(404);
};

export const getCartItemsByUserIdHandler = (req, res) => {
  let userId = req.session.userid;
  let items = [];
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].user.id == userId) {
      items.push(cartItems[i]);
    }
  }
  res.send(items);
};


export const addItemToCartHandler = (req, res) => {
  let userId = req.session.userid;
  if (cartItems.length > 0) {
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].user.id == userId && cartItems[i].dish.id == req.params.dishId) {
        cartItems[i].count++;
        console.log(cartItems);
        res.sendStatus(200);
        return;
      }
    }
  }
  let user = getUserFromId(userId);
  console.log("user = ", user);
  let dish = getDishFromId(req.params.dishId);
  if (dish != null && user != null) {
    cartItems.push(
      {
        "id": cartItems.length > 0
              ? cartItems[cartItems.length - 1].id + 1
              : 0,
        "user": user,
        "dish": dish,
        "count": 1
      }
    )
    res.sendStatus(200);
    return;
  }
  res.sendStatus(404);
};

export const deleteItemFromCartHandler = (req, res) => {
  let userId = req.session.userid;
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].user.id == userId && cartItems[i].dish.id == req.params.dishId) {
      cartItems[i].count--;
      if (cartItems[i].count == 0) {
        cartItems.splice(i, 1);
      }
      console.log(cartItems);
      res.sendStatus(200);
      return;
    }
  }
  res.sendStatus(404);
};


export const resetCartHandler = (req, res) => {
  let userId = req.session.userid;
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].user.id == userId) {
      cartItems.splice(i, cartItems.length);
      res.sendStatus(200);
      return;
    }
  }
  res.sendStatus(200);
};

// functions
const getUserFromId = (userId) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == userId) {
      return users[i];
    }
  }
  return null;
}

const getDishFromId = (dishId) => {
  for (let i = 0; i < dishes.length; i++) {
    if (dishes[i].id == dishId) {
      return dishes[i];
    }
  }
  return null;
};

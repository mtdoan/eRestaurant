import { dishes } from "./data/dishes.js"
import { cartItem } from "./data/cartItem.js"
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
  let userId = 0;
  let items = [];
  for (let i = 0; i < cartItem.length; i++) {
    if (cartItem[i].user.id == userId) {
      items.push(cartItem[i]);
    }
  }
  res.send(items);
};


export const addItemToCartHandler = (req, res) => {
  let userId = 0;
  for (let i = 0; i < cartItem.length; i++) {
    if (cartItem[i].user.id == userId && cartItem[i].dish.id == req.params.dishId) {
      cartItem[i].count++;
      console.log(cartItem);
      res.sendStatus(200);
      return;
    }
  }
  let user = getUserFromId(userId);
  let dish = getDishFromId(req.params.dishId);
  if (dish != null && user != null) {
    cartItem.push(
      {
        "id": cartItem[cartItem.length - 1].id + 1,
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
  let userId = 0;
  for (let i = 0; i < cartItem.length; i++) {
    if (cartItem[i].user.id == userId && cartItem[i].dish.id == req.params.dishId) {
      cartItem[i].count--;
      if (cartItem[i].count == 0) {
        cartItem.splice(i, 1);
      }
      console.log(cartItem);
      res.sendStatus(200);
      return;
    }
  }
  res.sendStatus(404);
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

import { dishes } from "./data/dishes.js"

export const dishListHandler = (req, res) => {
  res.send( dishes );
};

export const getDish = (req, res) => {
  for (let i = 0; i < dishes.length; i++) {
    if (dishes[i].dishId == req.params.dishId) {
      res.send(dishes[i]);
      console.log(dishes[i]);
      return
    }
  }
  res.sendStatus(404);
};

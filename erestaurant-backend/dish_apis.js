import { dishes } from "./Dish.js"

export const dishListHandler = (req, res) => {
  res.send({ dishes });
};

export const addItemToCart = (req, res) => {
  
};
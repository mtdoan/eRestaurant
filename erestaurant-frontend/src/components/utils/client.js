import axios from 'axios';

const hostUrl = "http://localhost:8081";

export const userId = () => 1;

export const loadCart = (userId, callback) => {
  axios.get(`${hostUrl}/cartItems/${userId}`).then((response) => {
    if (response.status === 200) {
      callback(response.data);
    }
  });
};

export const addDishToCart = (userId, dishId, callback) => {
  axios.post(`${hostUrl}/cartItems/${userId}/add/${dishId}`).then(response => {
    if (response.status === 200) {
      callback();
    }
  });
};

export const loadDishes = (callback) => {
  axios.get(`${hostUrl}/dishes`).then(response => {
    if (response.status === 200) {
      callback(response.data);
    }
  });
};

export const removeDishFromCart = (userId, dishId, callback) => {
  axios.post(`${hostUrl}/cartItems/${userId}/del/${dishId}`).then(response => {
    if (response.status === 200) {
      callback();
    }
  });
};

import axios from 'axios';

const hostUrl = "http://localhost:8081";

export const userId = () => 1;

export const submitSignUpForm = (email, firstName, lastName, phoneNumber, password, callback) => {
  axios.post(`${hostUrl}/signUp`, {
    email,
    firstName,
    lastName,
    phoneNumber,
    password,
  }).then(response => {
    if (response.status === 200) {
      callback();
    }
  });
};

export const submitSignInForm = (email, password, callback) => {
  axios.post(`${hostUrl}/signIn`, {
    email,
    password
  }).then(response => {
    if (response.status === 200) {
      callback();
    }
  });
};

export const loadCart = (userId, callback) => {
  axios.get(`${hostUrl}/cartItems`).then((response) => {
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

export const loadStaff = (callback) => {
  axios.get(`${hostUrl}/staff/list`).then(response => {
    if (response.status === 200) {
      callback(response.data);
    }
  });
};

export const removeStaffFromList = (staffId, callback) => {
  axios.post(`${hostUrl}/staff/del/${staffId}`).then(response => {
    if (response.status === 200) {
      callback();
    }
  });
};

export const editStaff = (staffId, callback) => {
  axios.post(`${hostUrl}/staff/edit/${staffId}`).then(response => {
    if (response.status === 200) {
      callback();
    }
  });
};

import axios from 'axios';

const hostUrl = "http://localhost:8081";
const instance = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*'
  },
  withCredentials: true
});

export const submitSignUpForm = (email, firstName, lastName, phoneNumber, password, callback) => {
  instance.post(`${hostUrl}/signUp`, {
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

;

export const submitSignInForm = (email, password, callback) => {
  instance.post(`${hostUrl}/signIn`, {
    email,
    password
  }).then(response => {
    if (response.status === 200) {
      callback();
    }
  });
};

export const loadCart = (callback) => {
  instance.get(`${hostUrl}/cartItems`).then((response) => {
    if (response.status === 200) {
      callback(response.data);
    }
  });
};

export const addDishToCart = (dishId, callback) => {
  instance.post(`${hostUrl}/cartItems/add/${dishId}`).then(response => {
    if (response.status === 200) {
      callback();
    }
  });
};

export const loadDishes = (callback) => {
  instance.get(`${hostUrl}/dishes`).then(response => {
    if (response.status === 200) {
      callback(response.data);
    }
  });
};

export const removeDishFromCart = (dishId, callback) => {
  instance.post(`${hostUrl}/cartItems/del/${dishId}`).then(response => {
    if (response.status === 200) {
      callback();
    }
  });
};

export const loadStaff = (callback) => {
  instance.get(`${hostUrl}/staff/list`).then(response => {
    if (response.status === 200) {
      callback(response.data);
    }
  });
};

export const removeStaffFromList = (staffId, callback) => {
  instance.post(`${hostUrl}/staff/del/${staffId}`).then(response => {
    if (response.status === 200) {
      callback();
    }
  });
};

export const editStaff = (staffId, firstName, lastName, phoneNumber, position, restaurantId, callback) => {
  instance.post(`${hostUrl}/staff/edit/${staffId}`, {
    firstName,
    lastName,
    phoneNumber,
    position,
    restaurantId
  }).then(response => {
    if (response.status === 200) {
      callback();
    }
  });
};


export const getUser = (callback) => {
  instance.get(`${hostUrl}/myAccount`).then(response => {
    if (response.status === 200) {
      callback(response.data);
    }
  });
};

export const getStaff = (staffId, callback) => {
  instance.get(`${hostUrl}/staff/${staffId}`).then(response => {
    if (response.status === 200) {
      callback(response.data);
    }
  });
};

export const submitStaffForm = (firstName, lastName, email, password, phoneNumber, position, restaurantId, callback ) => {
  instance.post(`${hostUrl}/staff/add`, {
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    position,
    restaurantId
  }).then(response => {
    if (response.status === 200) {
      callback();
    }
  });
}

import axios from 'axios';
import {toast} from 'react-toastify';

const hostUrl = "http://localhost:5000";
const instance = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*'
  },
  withCredentials: true
});

// Logout
export const logout = (callback) =>{
  instance.get(`${hostUrl}/logout`).then(response => {
    if (response.status === 200) {
      localStorage.clear();
      toast.success("You've been logged out");
      callback();
    }
  })
}

//-----------Register
export const submitSignUpForm = (email, firstName, lastName, phoneNumber, password, callback) => {
  instance.post(`${hostUrl}/register`, {
    email,
    firstName,
    lastName,
    phoneNumber,
    password
  })
  .then(response => {
    if (response.status === 200) {
      toast.success("You've been registered susseccfully");
      callback();
    }
  })
  .catch(err => { 
    console.log(err);
    toast.error("This email has been registered!", {autoClose: 3000});
  });
};

//-----------Sign in
export const submitSignInForm = (email, password, callback) => {
  instance.post(`${hostUrl}/signin`, {
    email,
    password
  })
  .then(response => {
    if (response.status === 200) {
      toast.success("You've been signed in");
      callback();
    }
  })
  .catch(err => { 
    console.log(err);
    toast.error("The email address or password is incorrect. Please retry!", {autoClose: 3000});
  })
  ;
};


//-----------User
export const getUser = (callback) => {
  instance.get(`${hostUrl}/myAccount`).then(response => {
    if (response.status === 200) {
      callback(response.data);
    } 
  });
};

export const editUser = (userId, firstName, lastName, phoneNumber, email, password, callback) => {
  instance.post(`${hostUrl}/myAccount/edit/${userId}`, {
    firstName,
    lastName,
    phoneNumber,
    email,
    password
  }).then(response => {
    if (response.status === 200) {
      callback();
    }
  });
};

//-----------Booking
export const loadItemsFromBooking = (bookingId, callback) => {
  instance.get(`${hostUrl}/booking/cart/${bookingId}`).then((response) => {
    if (response.status === 200) {
      callback(response.data);
    }
  });
};

export const submitBooking = (restaurantId, numberOfPatrons, dateEpoch, timeSlotId, callback ) => {
  instance.post(`${hostUrl}/booking`, {
    restaurantId,
    numberOfPatrons,
    dateEpoch,
    timeSlotId
  }).then(response => {
    if (response.status === 200) {
      callback(response.data);
    }
  });
}

export const getBooking = (callback) => {
  instance.get(`${hostUrl}/booking/details`).then(response => {
    if (response.status === 200) {
      callback(response.data);
    }
  });
};

export const listUserBooking = (callback) => {
  instance.get(`${hostUrl}/booking/list`).then(response => {
    if (response.status === 200) {
      callback(response.data);
    }
  });
};

export const listUserOrder = (callback) => {
  instance.get(`${hostUrl}/order/list`).then(response => {
    if (response.status === 200) {
      callback(response.data);
    }
  });
};

export const getBookingFromBookingId = (bookingId, callback) => {
  instance.get(`${hostUrl}/booking/${bookingId}`).then(response => {
    if (response.status === 200) {
      callback(response.data);
    }
  });
};

export const editBooking = (bookingId, restaurantId, numberOfPatrons, dateEpoch,
  timeSlotId, callback) => {
  instance.post(`${hostUrl}/booking/edit/${bookingId}`, {
    bookingId,
    restaurantId,
    numberOfPatrons,
    dateEpoch,
    timeSlotId
  })
  .then(response => {
    if (response.status === 200) {
      callback();
    }
  })
  ;
};

export const checkExistingOrder = (dateEpoch, timeSlotId, callback) => {
  instance.post(`${hostUrl}/check/order`, {
    dateEpoch,
    timeSlotId
  }).then(response => {
    if (response.status === 200) {
      callback(response.data);
    }
  });
};

export const checkExistingBooking = (bookingId, dateEpoch, timeSlotId, callback) => {
  instance.post(`${hostUrl}/check/booking`, {
    bookingId,
    dateEpoch,
    timeSlotId
  }).then(response => {
    if (response.status === 200) {
      callback(response.data);
    }
  });
};

//-----------Cart
export const loadCart = (callback) => {
  instance.get(`${hostUrl}/cartItems`).then((response) => {
    if (response.status === 200) {
      callback(response.data);
    }
  });
};

export const resetCart = (callback) => {
  instance.get(`${hostUrl}/resetCart`).then((response) => {
    if (response.status === 200) {
      callback(response.data);
    }
  });
};

//-----------Dish
export const loadDishes = (callback) => {
  instance.get(`${hostUrl}/dishes`).then(response => {
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

export const removeDishFromCart = (dishId, callback) => {
  instance.post(`${hostUrl}/cartItems/del/${dishId}`).then(response => {
    if (response.status === 200) {
      callback();
    }
  });
};

//-----------Staff
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

export const getStaff = (staffId, callback) => {
  instance.get(`${hostUrl}/staff/${staffId}`).then(response => {
    if (response.status === 200) {
      callback(response.data);
    }
  });
};

export const getStaffUser = (callback) => {
  instance.get(`${hostUrl}/staff/myAccount`).then(response => {
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

export const submitStaffSignInForm = (email, password, callback) => {
  instance.post(`${hostUrl}/staff/signin`, {
    email,
    password
  })
  .then(response => {
    if (response.status === 200) {
      toast.success("You've been signed in");
      callback();
    }
  })
  .catch(err => { 
    console.log(err);
    toast.error("The email address or password is incorrect. Please retry!", {autoClose: 3000});
  })
  ;
};
// 
export const loadOrders = (callback) => {
  instance.get(`${hostUrl}/staff/orders`).then(response => {
    if (response.status === 200) {
      callback(response.data);
    }
  });
};


export async function getUserFromIdAsync(userId) {
  const response = await instance.get(`${hostUrl}/user/${userId}`);
  return response.data;
}


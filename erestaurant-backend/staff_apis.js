import { staff } from "./data/staff.js"

export const listStaff = (req, res) => {
  res.send(staff);
};

export const getStaffFromId = (req, res) => {
  for (let i = 0; i < staff.length; i++) {
    if (staff[i].id == req.params.staffId) {
      res.send(staff[i]);
      return;
    }
  }
  res.sendStatus(404);
};

export const addStaff = (req, res) => {
  let staffId = staff[staff.length - 1].id + 1; 
  console.log("new staff id = ", staffId);
  
  let newStaff = {
    "id": staffId,
    "firstName": req.body.firstName,
    "lastName": req.body.lastName,
    "email": req.body.email,
    "password": req.body.password,
    "phoneNumber": req.body.phoneNumber,
    "position": req.body.position,
    "restaurantId": req.body.restaurantId
  }
  staff.push(newStaff);
  res.sendStatus(200);
};

export const deleteStaff = (req, res) => {
  for (let i = 0; i < staff.length; i++) {
    if (staff[i].id == req.params.staffId) {
      staff.splice(i, 1);
      res.sendStatus(200);
      return;
    }
  }
  console.log("id = ", req.params.staffId);

  res.sendStatus(401);
};

export const editStaff = (req, res) => {
  for (let i = 0; i < staff.length; i++) {
    if (staff[i].id == req.params.staffId) {
      staff[i] = {
        "id": staff[i].id,
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "email": staff[i].email,
        "password": req.body.password,
        "phoneNumber": req.body.phoneNumber,
        "position": req.body.position,
        "restaurantId": req.body.restaurantId
      }
      res.sendStatus(200);
      return;
    }
  }
  res.sendStatus(401);
};

export const staffSignIn = (req, res) => {
  for (let i = 0; i < staff.length; i++) {
    if (staff[i].email == req.body.email) {
      if (staff[i].password == req.body.password) {
        const session = req.session;
        session.userid = staff[i].id;
        console.log("req.session=", req.session)
        res.sendStatus(200);
        return;
      }
    }
  }
  res.sendStatus(401);
};


export const getStaffFromCookies = (req, res) => {
  let staffId = req.session.userid;
  console.log("req.session = ", req.session);

  for (let i = 0; i < staff.length; i++) {
    if (staff[i].id == staffId) {
      res.send(staff[i]);
      console.log("staff = ", staff[i]);
      return;
    }
  }
  res.sendStatus(401);
};
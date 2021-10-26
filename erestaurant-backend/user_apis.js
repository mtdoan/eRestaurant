import { users } from "./data/users.js"

export const getUserFromCookies = (req, res) => {
  let userId = req.session.userid;
  console.log("req.session = ", req.session);

  for (let i = 0; i < users.length; i++) {
    if (users[i].id == userId) {
      res.send(users[i]);
      console.log("user = ", users[i]);
      return;
    }
  }
  res.sendStatus(401);
};


export const getUserId1 = (req, res) => {
  res.send(users[1]);
};

export const addNewUser = (req, res) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email == req.body.email) {
      res.sendStatus(401);
      return;
    }
  }

  let newUser = {
    "id": users[users.length - 1].id + 1,
    "email": req.body.email,
    "firstName": req.body.firstName,
    "lastName": req.body.lastName,
    "phoneNumber": req.body.phoneNumber,
    "password": req.body.password
  };
  users.push(newUser); 
  res.sendStatus(200);
};

export const userSignIn = (req, res) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email == req.body.email) {
      if (users[i].password == req.body.password) {
        const session = req.session;
        session.userid = users[i].id;
        console.log("req.session=", req.session)
        res.sendStatus(200);
        return;
      }
    }
  }
  res.sendStatus(401);
};

export const logout = (req, res) => {
  req.session.destroy();
  res.sendStatus(200);
};

  
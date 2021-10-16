import { users } from "./data/users.js"

export const getUserIdFromCookies = (req, res) => {
  var cookie = req.headers.cookie;
  
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == req.params.userId) {
      res.send(users[i]);
      return;
    }
  }
  res.sendStatus(404);
};

export const getUserFromId = (req, res) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == req.params.userId) {
      res.send(users[i]);
      return;
    }
  }
  res.sendStatus(404);
};

export const getUserId1 = (req, res) => {
  res.send(users[1]);
};
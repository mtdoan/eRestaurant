import { users } from "./data/users.js"

export const getUserFromId = (req, res) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == req.params.userId) {
      res.send(users[i]);
      return;
    }
  }
  res.sendStatus(404);
};
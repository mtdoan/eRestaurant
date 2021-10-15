import express from "express"
import mysql from "mysql"

import cors from 'cors';

const app = express()                           // initialises a new app

app.use(express.json())

app.use(cors({origin: 'http://localhost:3000'}));
                                              
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "studio1agroup2",
    database: "MMOCCD"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log('Connected');
  });
  
app.post("/signin", (req, res) => {
  console.log(req.body)
  const email = req.body.email; //input in email section of interface
  const password = req.body.password; //input in password section of interface
  if (email && password) { //check input was entered
    con.query('SELECT * FROM Customer WHERE customerEmail = ? AND customerPassword = ?', [email, password], function (error, results, fields) { //retrieve customer account that matches username and password
      if (results.length > 0) { //results is array containing all matches to sql query. If greater than 0, matching account found
        res.sendStatus(200);
      } else {
        res.sendStatus(401);
      }
    });
  } else {
    res.sendStatus(401);
  }
})

app.post("/register", (req, res) => {
  let { email, firstName, lastName, phoneNumber, password } = req.body
  console.log(req.body)
  let query = `INSERT INTO Customer (customerFname, customerLname, customerEmail, customerPassword, customerPhoneNumber) VALUES ('${firstName}', '${lastName}', '${email}', '${password}', ${phoneNumber})`
  try {
    con.query(query)
    console.log(`${firstName}'s details added to database.'`)
    con.query("SELECT * FROM Customer", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error.message)
    res.status(422).send(error.message)
  }
  res.sendStatus(401);
})

app.listen(5000, () => console.log("Listening on port 5000")) // Start the server and have it listen to port 5000
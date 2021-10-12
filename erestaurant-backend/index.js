import express from "express"
import mysql from "mysql"
import { dishListHandler, getDish } from "./dish_apis.js"

const app = express()                           // initialises a new app

app.use(express.urlencoded({extended: true}))   // tells the app to use express.urlencoded, it's a parser, which is capable of interpreting the content of 
                                                // forms submitted with the POST method, and to add the content to the body of the request
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


app.post("/login", (req, res) => {            
    console.log(req.body)

	const email = req.body.email; //input in email section of interface
	const password = req.body.password; //input in password section of interface
	if (email && password) { //check input was entered
		con.query('SELECT * FROM Customer WHERE customerEmail = ? AND customerPassword = ?', [email, password], function(error, results, fields) { //retrieve customer account that matches username and password
			if (results.length > 0) { //results is array containing all matches to sql query. If greater than 0, matching account found
				res.redirect('/eRestaurant/signedin')
			} else {
                res.redirect('eRestaurant/signin')
			}			
		});
	} else {
		res.redirect('eRestaurant/signin')
	}
})

app.post("/register", (req, res) => {              
    let {email, firstName, lastName, phoneNumber, password} = req.body
    console.log(req.body)                 
    
    let query = `INSERT INTO Customer (customerFname, customerLname, customerEmail, customerPassword, customerPhoneNumber) VALUES ('${firstName}', '${lastName}', '${email}', '${password}', ${phoneNumber})`
    
    try {
        con.query(query)

        console.log(`${firstName}'s details added to database.'`)
        con.query("SELECT * FROM Customer", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
          });
        res.redirect("eRestaurant/registered")

    } catch (error) {
        console.log(error.message)
        res.status(422).send(error.message)
    }

    res.redirect("eRestaurant")
})

app.get("/dishes", dishListHandler);

app.get("/dishes/:dishId", getDish);

app.listen(5000, () => console.log("Listening on port 5000")) // Start the server and have it listen to port 5000
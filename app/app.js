// Import express.js
const express = require("express");

// Create express app
var app = express();

// Add static files location
app.use(express.static("static"));
app.use('/bootstrap', express.static('node_modules/bootstrap/dist'));

app.use(express.urlencoded({ extended: true }));

// Get the functions in the db.js file to use
const db = require('./services/db');

// Get the models
const { Guest } = require("./models/guest");
const { User } = require("./models/user");

// Use the Pug templating engine
app.set('view engine', 'pug');
app.set('views', './app/views');


// Create a route for root - /
app.get("/", function(req, res) {
    res.render("index");
});

// Display a formatted list of guests
app.get("/all-guests-formatted", function(req, res) {
    var sql = 'select * from guest';
    db.query(sql).then(results => {
        res.render('all-guests', {data: results});
    });
});


// Single guest page, using MVC pattern
app.get("/guest-single/:id", async function (req, res) {
    var gtId = req.params.id;
    
    var guest = new Guest(gtId);
    await guest.getGuestName();
    await guest.getGuestList();
    await guest.getGuestItem();
    console.log(guest);
    res.render('guest', {'guest':guest});
});

// Display a formatted list of users
app.get("/all-users-formatted", function(req, res) {
    var sql = 'select * from user';
    db.query(sql).then(results => {
        res.render('all-users', {data: results});
    });
});

// Single user page, using MVC pattern
app.get("/user-single/:id", async function (req, res) {
    var UId = req.params.id;
    
    var user = new User(UId);
    await user.getUserName();
    await user.getUserList();
    await user.getUserItem();
    console.log(user);
    res.render('user', {'user':user});
});

app.post('/add-choice', async function (req, res) {
    params = req.body;
    var guest = new Guest(params.id);
    try {
         await guest.addGuestChoice(params.choice);
         res.send('form submitted');
        }
     catch (err) {
         console.error(`Error while adding choice `, err.message);
     }
     res.redirect('/guest-single/' + params.id);

});


// Start server on port 3000
app.listen(3000,function(){
    console.log(`Server running at http://127.0.0.1:3000/`);
});
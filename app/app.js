// Import express.js
const express = require("express");

// Create express app
var app = express();

// Add static files location
app.use(express.static("static"));

// Get the functions in the db.js file to use
const db = require('./services/db');

// Get the models
const { Student } = require("./models/student");
const { Guest } = require("./models/guest");

// Use the Pug templating engine
app.set('view engine', 'pug');
app.set('views', './app/views');


// Create a route for root - /
app.get("/", function(req, res) {
    res.render("index");
});


// Task 1 JSON formatted listing of students
app.get("/all-students", function(req, res) {
    var sql = 'select * from Students';
    // As we are not inside an async function we cannot use await
    // So we use .then syntax to ensure that we wait until the 
    // promise returned by the async function is resolved before we proceed
    db.query(sql).then(results => {
        console.log(results);
        res.json(results);
    });

});

// Task 2 display a formatted list of students
app.get("/all-students-formatted", function(req, res) {
    var sql = 'select * from Students';
    db.query(sql).then(results => {
    	    // Send the results rows to the all-students template
    	    // The rows will be in a variable called data
        res.render('all-students', {data: results});
    });
});

// Task 2 display a formatted list of guests
app.get("/all-guests-formatted", function(req, res) {
    var sql = 'select * from guest';
    db.query(sql).then(results => {
    	    // Send the results rows to the all-students template
    	    // The rows will be in a variable called data
        res.render('all-guests', {data: results});
    });
});

// Single student page, using MVC pattern
app.get("/student-single/:id", async function (req, res) {
    var stId = req.params.id;
    // Create a student class with the ID passed
    var student = new Student(stId);
    await student.getStudentName();
    await student.getStudentProgramme();
    //await student.getStudentModules();
    console.log(student);
    res.render('student', {'student':student});
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




// JSON output of all programmes
app.get("/all-programmes", function(req, res) {
    var sql = 'select * from Programmes';
    // As we are not inside an async function we cannot use await
    // So we use .then syntax to ensure that we wait until the 
    // promise returned by the async function is resolved before we proceed
    db.query(sql).then(results => {
        console.log(results);
        res.json(results);
    });

});

// Single programme page (no formatting or template)
app.get("/programme-single/:id", async function (req, res) {
    var pCode = req.params.id;
    var pSql = "SELECT * FROM Programmes WHERE id = ?";
    var results = await db.query(pSql, [pCode]);
    //Now call the database for the modules
    //Why do you think that the word modules is coming in before the name of the programme??
    var modSql = "SELECT * FROM Programme_Modules pm \
    JOIN Modules m on m.code = pm.module \
    WHERE programme = ?";
    var modResults = await db.query(modSql, [pCode]);
    // String the results together, just for now.  Later we will push this
    // through the template
    res.send(JSON.stringify(results) + JSON.stringify(modResults));  
});



// Start server on port 3000
app.listen(3000,function(){
    console.log(`Server running at http://127.0.0.1:3000/`);
});
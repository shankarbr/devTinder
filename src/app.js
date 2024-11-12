const express = require('express');

const app = express(); //Creating a new express js application

// The result be HAHAHA irrepspective of the method because  of the order 
app.use("/user", (req, res) => {
    res.send("HAHAHAHAHA")
});


//This will handle only handle GET call to /user
app.get("/user", (req, res) => {
    res.send({firstname: "Shankar", Lastname: "BR"})
});

app.post("/user", (req, res) => {
    // Save data to DB
    res.send("Data Successfully saved to data base")
});

app.delete("/user", (req, res) => {
    res.send("Delted Succesfully")
});

// Thi will match all the http methpod API calls to /test
app.use("/test",(req,res) => {                         //Request Handler
    res.send("Hello from the serverrrrrrr!")
});

app.listen(3000, ()=> {
    console.log("Server is successfully listening on port 3000.....")
});

//Order of the code is VV Important/ matters a lot
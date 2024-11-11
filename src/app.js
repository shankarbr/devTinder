const express = require('express');

const app = express(); //Creating a new express js application

app.use("/test",(req,res) => {                         //Request Handler
    res.send("Hello from the serverrrrrr!")
});

app.listen(3000, ()=> {
    console.log("Server is successfully listening on port 3000.....")
});
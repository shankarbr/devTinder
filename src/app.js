const express = require('express');

const app = express(); //Creating a new express js application

// The result be HAHAHA irrepspective of the method because  of the order if we use app.use in the starting as it matches with all methods.


//This will handle only handle GET call to /user

// req /user, /user/xyz, /user/1

// here b is optional coz o f ?. /ac /abc, using + => /abc, /abbbbc, ab*cd => abANYTHINGcd, a(bc)?cd => bc is optional
// // app.get(/a/) => here /car will work since ot contains a. (These are called Rejex), /.*fly$/ => ANYTHINGfly

// app.get("/user", (req, res) => {
//     console.log(req.query); // to get control on the userID // this is how we read the query parameters
//     res.send({firstname: "Shankar", Lastname: "BR"})
// });

// app.get("/user/:userId/:name/:password", (req, res) => {
//     console.log(req.params); // To handle the dynamic routing
//     res.send({firstname: "Shankar", Lastname: "BR"})
// });
// app.use(
//     "/user", [
// (req, res, next) => { // This function is known as route handlers.
//     console.log("Handling the route user 1")
//     // res.send("route handler 1"); // if there is no res.send it will just send request with infinite loop.
//     next(); 
// },
// (req, res, next) => {
//     console.log("Handling the route user 2")
//     // res.send("route handler 2");
//     next();
// },
// (req, res, next) => {
//     console.log("Handling the route user 3")
//     res.send("route handler 3");
//     // next(); Gives an error in the Postman.
// }
// ]);

// const  {adminAuth, userAuth } = require("./middlewares/auth")
// //Handle middleware for all GET, POST, ..requests.
// app.use("/admin", adminAuth);
// app.use("/user", userAuth);


// app.get("/user", (req, res) =>{
//     res.send("User data sent")
//     });


// app.get("/admin/getAlldata", (req, res) =>{
// //Logic of fetching all data
// // Logic of Checking if the request is authenticated
// res.send("All data sent")
// });

app.get("/getUserdata", (req, res) =>{
    try{
        throw new Error("gshhhddj");
        res.send("User data sent");
    }
    catch (err) {
     res.status(500).send("Some error occured")
    }
    //Logic of fetching all data
    throw new Error("gshhhddj");
    res.send("User data sent");
 });

app.use("/", (err, req, res, next) =>{
    if (err) {
        // Log your error
        res.status(500).send("something went wrong");
    }
}); 

app.listen(3000, ()=> {
    console.log("Server is successfully listening on port 3000.....")
});

//Order of the code is VV Important/ matters a lot
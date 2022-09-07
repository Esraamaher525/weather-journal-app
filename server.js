// Setup empty JS object to act as endpoint for all routes
projectData = {};
const PORT=4000;
const hostname="127.0.0.1";
// Require Express to run server and routes
const express=require("express");
// Start up an instance of app
const app=express();
app.use(express.json()); 
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser= require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors=require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
 app.listen(PORT,hostname,()=>{
    console.log(`port is ${PORT}`);
 })




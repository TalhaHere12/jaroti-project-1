import {mongoose} from "mongoose";
import express from "express";
import cors from "cors";
import Connection from "./database/db.js"
import dotenv from "dotenv"
import Routes from "./routes/routes.js"
import bodyParser from "body-parser";

//initialize as an express app
const app = express();

//middlewares
dotenv.config()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({extended:true}));
app.use(cors())

//routes
app.use('/',Routes)

//assigned public folder as a static
app.use(express.static('public'))

//connecting to database
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username,password)

//Sending errors to user
app.use((err,req,res,next) => {

    console.error(err.stack);
    res.status(500).send("Internal server Error");

})

//assigning port
app.listen(5000,() =>{
    console.log("Server is running on port 5000")
});
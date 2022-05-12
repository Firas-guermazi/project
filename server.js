//import express
const express = require('express');
const connectDb= require('./config/connectDb');
require('dotenv').config();
const cors=require('cors')


//init the app
const app = express()
connectDb()
app.use(express.json());
app.use(cors());



//create a server

app.listen(process.env.port , (err)=>
err ? console.error(err) :console.log(`server is listening on port ${process.env.port}`));










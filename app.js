require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('./db/connection');

const User = require('./models/user');

// const cors = require("cors");
// const corsOptions = {
//     origin: true,
//     credentials: true,            //access-control-allow-credentials:true
//     optionSuccessStatus: 200,
// }

// app.use(cors(corsOptions)) // Use this after the variable declaration

// Middleware
app.use(express.json());
app.use(require('./routers/auth')); // link the router files to make routing easy

app.get('/', (req, res) => {
    res.send('hello from the other side');
})
// app.get('/about', (req, res) => {
//     res.send('hello from the about page');
// })
// app.get('/contact', (req, res) => {
//     res.send('hello from the contact page');
// })
app.get('/login', (req, res) => {
    res.send('hello from the signin page');
})
app.get('/register', (req, res) => {
    res.send('hello from the signup page');
})

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})
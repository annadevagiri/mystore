const express = require('express');
const mongoose = require('mongoose');
// const CupcakeStore = require('./cupcake.models/cupcake.models');
const cupcakeStoreRoute = require('./routes/v2/cupcakes/index');
// const cupcakesObject = require('./cupcake.models/cupcake.json');
const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/', cupcakeStoreRoute);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

// commenting this as I had some connectivity issue and key generation module conflict
// mongoose.connect("mongodb+srv://admin:admin123@cupcake.aj8it.mongodb.net/?retryWrites=true&w=majority&appName=cupcake")
//     .then(() => {
//         console.log("MongoDB connected");
//         app.listen(3000, () => {
//             console.log('Server started on port 3000');
//         });
//     })
//     .catch((error) => {
//         console.log("databasse connection error:::", error);
//     })




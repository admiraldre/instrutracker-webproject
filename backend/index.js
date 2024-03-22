const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const app = express();

app.get('/', (req,res) => {
    console.log(req);
    return res.status(234).send('Hello this is my website');
});

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database.');
        app.listen (PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });

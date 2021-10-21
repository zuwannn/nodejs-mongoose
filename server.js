const express = require('express');

// create express app
const app = express()


// parse requests of content-type - application/x-wwww-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(express.json())


// configuring the database
const dbconfig = require('./config/database.config')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

//  connecting to the database 
mongoose.connect(dbconfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
})

//  listen for requests 
app.listen(3000, () => {
    console.log("server is listening on port 3000");
})
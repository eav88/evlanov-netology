const express = require('express')
const { v4: uuidv4 } = require('uuid')
const fs = require('node:fs')
const mongoose = require('mongoose')

// Routers
const errorRouter = require('./routes/error')
const apiBooks = require('./routes/api')


const app = express()
app.use(express.json())

app.use('/', apiBooks)

app.use('/', function (req, res) {
    res.json('Please, use api books')
})

app.use(errorRouter)

async function start(PORT, urlDB) {
    try {
        // await mongoose.connect(urlDB);

        // const urlDB = 'mongodb://root:example@localhost:27017/db';

    await mongoose.connect(urlDB, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connected to MongoDB'))
        .catch(err => console.error('Could not connect to MongoDB', err));


        app.listen(PORT);
        console.log('Server started at', 'http://localhost:' + PORT);
        console.log('Monogo express at', 'http://localhost:8081')
    } catch (error) {
        console.log(error)
    }
}

const PORT = 3000
const urlDB = 'mongodb://root:example@mongo:27017/db?authSource=admin';
// mongodb://root:example@localhost:27017/db?authSource=admin

start(PORT, urlDB)





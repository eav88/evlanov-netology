const express = require('express')
const { v4: uuidv4 } = require('uuid')
const fs = require ('node:fs')
const PORT = 3000

const bootstrapRoute = require('./routes/bootstrap')
const mainRoute = require('./routes/main')
const catalogRoute = require('./routes/catalog')

const app = express();
app.use(express.urlencoded());
app.set("view engine", "ejs");

app.use('/bootstrap', bootstrapRoute);
app.use('/', mainRoute);
app.use('/catalog', catalogRoute);

// Ошибка
app.get('/404',  function (req,res) {
    res.render("error", {
        title: "Ошибка", 
        iconpage:'bi bi-exclamation-circle',
    });
})

app.listen(PORT, function(){
    console.log ('Server started at ','http://localhost:'+PORT, PORT)
})





const express = require('express')
const router = express.Router()

const { v4: uuidv4 } = require('uuid')
const fs = require ('node:fs')
const { error } = require('node:console')
let date = new Date()
let iduu  = uuidv4();


// Авторизация пользователя
router.post('/', (req, res) => {
    let method = req.method
    let url = req.url
    res.status(201).send({ id: 1, mail: "test@mail.ru" })
    console.log('routes - Авторизация пользователя')

    // Логирование
    let filelog = JSON.parse(fs.readFileSync('log.json'))
    filelog.push({
        "id": iduu,
        "date": date.getDate(),
        "router":"routes - Авторизация пользователя",
        "method": method,
        "url":url
    })
    let datalog = JSON.stringify(filelog, null, 2)
    fs.writeFileSync('log.json', datalog);

    console.log('Логирование:', true)

})



module.exports = router
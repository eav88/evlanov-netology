const express = require('express')
const { v4: uuidv4 } = require('uuid')
const fs = require ('node:fs')
const PORT = 3000

let date = new Date()
let iduu  = uuidv4();

const startRouter = require('./routes/start')
const avtorisationRouter = require('./routes/avtorisation')
const bookRouter = require('./routes/book')
const bookFileUpload = require('./routes/bookfile-upload.js')
const errorRouter = require('./routes/error')

const app = express()
app.use(express.json())


app.use('/', startRouter)
app.use('/', avtorisationRouter)
app.use('/', bookRouter)

app.use('/bookfile', bookFileUpload)
app.use('/files', express.static(__dirname+'/files'))
app.use(errorRouter)

app.listen(PORT, function(){
    console.log ('Server started at ','http://localhost:'+PORT, PORT)
})

// Логирование
let filelog = JSON.parse(fs.readFileSync('log.json'))
filelog.push({
    "id": iduu,
    "date": date,
    "router":"none",
    "method": "app.use",
    "url":"http://localhost:"+PORT
})
let datalog = JSON.stringify(filelog, null, 2)
fs.writeFileSync('log.json', datalog);

resultLog = JSON.parse(fs.readFileSync('log.json'))
// console.log(resultLog[resultLog.length-1], true)
console.log('Логирование:', true)





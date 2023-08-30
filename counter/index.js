const express = require('express')
const redis = require('redis')

const PORT = 3002

const app = express()

//http://localhost:6379
const REDIS_URL = 'redis://redis:6379';
const client = redis.createClient({url: REDIS_URL});

(async function () {
    await client.connect()
})()


// Первая страница
app.get('/',function (req, res) {
    res.json('Counter work , use library ')
})

// Результат по id
app.get('/counter/:bookId', async function (req, res) {
    const {bookId} = req.params
    
    try {
        const cnt = await client.get(bookId)
        res.json({cnt})
    }catch(error){
        res.json(error)
    }
})

//  Добавление POST
app.post('/counter/:bookId/incr', async function (req, res) {
    const {bookId} = req.params
    
    try {
        const cnt = await client.incr(bookId)
        res.json({cnt})
    } catch (error) {
        res.json(error)
    }
})

//  Добавление GET
app.get('/add/:bookId/incr', async function (req, res) {
    const {bookId} = req.params
    
    try {
        const cnt = await client.incr(bookId)
        res.json({cnt})
    } catch (error) {
        res.json(error)
    }
})




// Ошибка 404
app.use(function(req, res, cb) {
    res.status(200).json('404 | Ошибка')
    cb()
});

app.listen(PORT, function(req, res){
    console.log('Counter listen port', 'http://localhost:'+PORT,PORT)
})


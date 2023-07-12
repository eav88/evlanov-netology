// .get( , (request, response) => {
// request - хранит информацию о запросе;
// response - управляет отправкой ответа.
//    });

const express = require('express')
const { v4: uuid } = require('uuid')
const PORT = 3000

class book {
    constructor(id = uuid(),title = 'Наименование книги', description = 'Описание книги', authors = 'Автор', favorite = 'true or false', fileCover = 'изображение обложки', fileName='имя файла'){
        this.id = id,
        this.title = title,
        this.description = description,
        this.authors = authors,
        this.favorite = favorite,
        this.fileCover = fileCover,
        this.fileName = fileName
    }
}

const books = [
    new book('001', 'books1','Описание книги 1','Автор этой книги','Да, в избранном','Обложка тут','Обложка этой книги'),
    new book(),
    new book(),
];

const app = express()
app.use(express.json())

// get test
app.get('/', function(req, res) {
    res.send('<h1>Use current url</h1>')
    console.log('get test at', PORT)
});

// авторизация пользователя
app.post ('/api/user/login',function (req,res) {
    res.status(201).send({ id: 1, mail: "test@mail.ru" })
    console.log('авторизация пользователя')
})

// получить все книги
app.get('/api/books', function(req, res) {
    res.json(books)
    console.log('получить все книги')
});

// получить книгу по ID
app.get('/api/books/:id', function(req, res) {
    console.log('получить книгу по ID')
    const {id} = req.params
    const idx = books.findIndex(el => el.id === id)

    if(idx !== -1){
        res.json(books[idx])
        console.log('Книга по ID получена')
    } else {
        res.status(404)
        res.json('404 | Такой книги нет')
    }
});

// получить книгу по названию
app.get('/api/book/:title', function(req, res) {
    console.log('получить книгу по названию')
    const {title} = req.params
    const idx = books.findIndex(el => el.title === title)

    if(idx !== -1){
        res.json(books[idx])
        console.log('Книга по названию получена')
    } else {
        res.status(404)
        res.json('404 | Такой книги нет')
    }
});

// test params
app.get("/edpresso/:user/:userId", (req, res)=>{
    res.send(req.params);
  })


// POST создать книгу
app.post('/api/books', (req, res) => {
    const {id, title, description, authors, favorite, fileCover, fileName} = req.body
    const newbook = new book(id, title, description, authors, favorite, fileCover, fileName)
    books.push(newbook)
    res.status(201)
    res.json(newbook)
    console.log('Cоздать книгу')
})

// PUT редактировать книгу по ID
app.put('/api/books/:idp', function(req, res) {
    const {id,title, description, authors, favorite, fileCover, fileName} = req.body
    const {idp} = req.params
    const idx = books.findIndex(el => el.id === idp)
    console.log('редактировать книгу по ID')

    if(idx !== -1){
        books[idx] = {
            ...books[idx],
            id,title, description, authors, favorite, fileCover, fileName
            
        }
        res.json(books[idx])
        console.log('Книга по ID изменена')
        
    } else {
        res.status(404)
        res.json('404 | Такой книги нет')
    }
});

// DELETE удалить книгу по ID
app.delete('/api/books/:id', function(req, res) {
    const {id} = req.params
    const idx = books.findIndex(el => el.id === id)

    if(idx !== -1){
        books.splice(idx, 1)
        res.json(true)
        console.log('удалить книгу по ID', true)
        
    } else {
        res.status(404)
        res.json('404 | Такой книги нет')
    }
});

app.listen(PORT, function(){
    console.log ('Server started at ','http://localhost:'+PORT)
})



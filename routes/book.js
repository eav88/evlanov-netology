const express = require('express')
const router = express.Router()
const { v4: uuid } = require('uuid')
const fs = require ('fs')
const fileMulter = require('../routes/bookfile.js')

class book {
    constructor(id = uuid(),title = 'title Book', description = 'description Book', authors = 'authors Book', favorite = 'favorite Book', fileCover = 'fileCover Book', fileName='fileName Book', fileBook='fileBook Book'){
        this.id = id,
        this.title = title,
        this.description = description,
        this.authors = authors,
        this.favorite = favorite,
        this.fileCover = fileCover,
        this.fileName = fileName,
        this.fileBook = fileBook
    }
}

const books = [
    new book('001', 'books1','Описание книги 1','Автор этой книги','Да, в избранном','Обложка тут','Обложка этой книги','files\\1689701843236-newbook.txt'),
    new book(),
];

// Получить все книги
router.get('/api/books', (req, res) => {
    res.json(books)
    console.log('routes - Получить все книги')
})

// Получить книгу по ID
router.get('/api/books/:id', function(req, res) {
    console.log('routes - Получить книгу по ID')
    const {id} = req.params
    const idx = books.findIndex(el => el.id === id)

    if(idx !== -1){
        res.json(books[idx])
        console.log('routes - Книга по ID получена')
    } else {
        res.status(404)
        res.json('routes - 404 | Такой книги нет')
    }
});

// получить книгу по названию
router.get('/api/book/:title', function(req, res) {
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

// Скачать txt книги по ID
router.get('/api/books/:id/download', function(req, res) {
    console.log('routes - Получить книгу по ID')
    const {id} = req.params
    const idx = books.findIndex(el => el.id === id)

    if(idx !== -1){
        res.json(books[idx])

        console.log('routes - Скачать txt книги по ID')


    } else {
        res.status(404)
        res.send('<a href="http://localhost:3000/files/bookdemo.txt">Demo books</a>')

    }
});

// POST создать книгу
router.post('/api/books',fileMulter.single('bookfilekey'), (req, res) => {

    if(req.file){
        
        const fileBookurl = req.file.path
        const {id, title, description, authors, favorite, fileCover, fileName, fileBook} = req.body
        let newbook = new book(id, title, description, authors, favorite, fileCover, fileName, fileBookurl)
        books.push(newbook)
        res.status(201)
        res.json(newbook)
        console.log('Cоздать книгу & file is', true)
    } else{
        const {id, title, description, authors, favorite, fileCover, fileName, fileBook} = req.body
        let newbook = new book(id, title, description, authors, favorite, fileCover, fileName, fileBook)
        books.push(newbook)
        res.status(201)
        res.json(newbook)
        console.log('Cоздать книгу & file is', false)
    }
})

// PUT редактировать книгу по ID
router.put('/api/books/:idp', function(req, res) {
    const {id, title, description, authors, favorite, fileCover, fileName, fileBook} = req.body
    const {idp} = req.params
    const idx = books.findIndex(el => el.id === idp)
    console.log('редактировать книгу по ID')

    if(idx !== -1){
        books[idx] = {
            ...books[idx],
            id,title, description, authors, favorite, fileCover, fileName, fileBook
            
        }
        res.json(books[idx])
        console.log('Книга по ID изменена')
        
    } else {
        res.status(404)
        res.json('404 | Такой книги нет')
    }
});

// DELETE удалить книгу по ID
router.delete('/api/books/:id', function(req, res) {
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

module.exports = router
const express = require('express')
const router = express.Router()
const { v4: uuid } = require('uuid')
const fs = require ('fs')

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
    new book(uuid(), 'название','Описание книги','Автор этой книги','Да, в избранном','Обложка тут','Обложка этой книги','files\\newbook.txt'),
    new book(uuid(), 'Зимний Лес', 'Снежные Вершины', 'Ольга Кузнецова', 'Да, в избранном', 'Обложка тут', 'Обложка Зимнего Леса', 'files\\winterforest.txt'),
    new book(uuid(), 'Пустынный Шум', 'Жаркий Песок', 'Алексей Смирнов', 'Да, в избранном', 'Обложка тут', 'Обложка Пустынного Шума', 'files\\desertsound.txt'),
    new book(uuid(), 'Осенний Дождь', 'Теплый Чай', 'Елена Васильева', 'Да, в избранном', 'Обложка тут', 'Обложка Осеннего Дождя', 'files\\autumnrain.txt'),
    new book(uuid(), 'Солнечный День', 'Теплый Рассвет', 'Иван Петров', 'Да, в избранном', 'Обложка тут', 'Обложка Солнечного Дня', 'files\\sunnyday.txt'),
    new book(uuid(), 'Лунная Ночь', 'Темное Небо', 'Анна Сидорова', 'Да, в избранном', 'Обложка тут', 'Обложка Лунной Ночи', 'files\\moonynight.txt'),
    new book(uuid(), 'Горный Ветер', 'Свежий Воздух', 'Михаил Иванов', 'Да, в избранном', 'Обложка тут', 'Обложка Горного Ветра', 'files\\mountainwind.txt')

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
        res.download(books[idx].fileBook, books[idx].title+'.txt')
        // req.json('TEST text')
        console.log('routes - Получить книгу по ID | скачена')

    } else {
        res.status(404)
        res.json('Запрашиваемый файл отсутвует')
    }
});

// TEST
router.get('/test/', function (req, res) {
    res.download('files/bookdemo.txt','BLABLABLA.txt', function (error) {
        console.log("Error : ", error)
    });
})




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
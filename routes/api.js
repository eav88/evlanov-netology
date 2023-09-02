const express = require('express')
const router = express.Router()
const { v4: uuid } = require('uuid')
const fs = require ('fs')
const books = require('../models/books')



// Получить все книги	Получаем массив всех книг
router.get('/api/books', async function(req, res){
    
    try {
        const book = await books.find().select('-__v')
        res.json(book)
    } catch (error) {
        res.status(500).json(error)
    }
    console.log('Получить все книги	Получаем массив всех книг')
})


// /api/new Для теста

router.get('/api/new', async function(req, res) {
    const testBook = new books({
        title: 'Война и мир',
        description: 'Роман-эпопея Льва Толстого, описывающий жизнь русского общества в эпоху Наполеоновских войн.',
        authors: 'Лев Толстой',
        favorite: 'Да',
        fileCover: 'war_and_peace_cover.jpg',
        fileName: 'war_and_peace.txt',
    });

    try {
        await testBook.save();
        res.json(testBook);
    } catch (error) {
        res.status(500).json(error);
    }

    console.log('Война и мир для теста');
});


// Получить книгу по ID	Получаем объект книги, если запись не найдена, вернём Code: 404
router.get('/api/books/:id', async function(req, res){
    const {id} = req.params
    
    try {
        const book = await books.findById(id).select('-__v')
        res.json(book)
    } catch (error) {
        res.status(500).json(error)
    }
    console.log('Получить книгу по ID', id)
})

// Создать книгу	Создаём книгу и возвращаем её же вместе с присвоенным ID
router.post('/api/books', async function(req, res){
    const {title, description, authors, favorite, fileCover, fileName} = req.body
    const book = new books({title, description, authors, favorite, fileCover, fileName})
        
    try {
        await book.save();
        res.json(book)
        
    } catch (error) {
        res.status(500).json(error)
    }
    console.log('Создать книгу')
})

// Редактировать книгу по ID	Редактируем объект книги, если запись не найдена, вернём Code: 404
router.put('/api/books/:id', async function(req, res){
    const {id} = req.params
    const {title, description, authors, favorite, fileCover, fileName} = req.body

    
    res.json(`Редактировать книгу по ID:${id}`)

    try {
        await books.findByIdAndUpdate(id, {title, description, authors, favorite, fileCover, fileName})
        res.redirect(`/api/books/${id}`)

    } catch (error) {
        res.status(500).json(error)
    }
    console.log('Редактировать книгу по ID', id)
})

// Удалить книгу по ID	Удаляем книгу и возвращаем ответ: ok
router.delete('/api/books/:id', async function(req, res){
    const {id} = req.params
    
   
    
    try {
        await books.deleteOne(id)
        res.json(true)
    } catch (error) {
        res.status(500).json(error)
    }
    console.log('Удалить книгу по ID')
})

module.exports = router
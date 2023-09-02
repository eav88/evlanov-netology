const express = require('express')
const router = express.Router()
const { v4: uuid } = require('uuid')
const fs = require ('fs')
const library = require('../models/book')



// Получить все книги	Получаем массив всех книг
router.get('/api/books', async function(req, res){
    
    try {
        const lib = await library.find().select('-__v')
        res.json(lib)
    } catch (error) {
        res.status(500).json(error)
    }
    console.log('Получить все книги	Получаем массив всех книг')
})


// /api/new Для теста

router.get('/api/new', async function(req, res) {
    const newBook = new library({
        id: uuid(),
        title: 'Война и мир',
        description: 'Роман-эпопея Льва Толстого, описывающий жизнь русского общества в эпоху Наполеоновских войн.',
        authors: 'Лев Толстой',
        favorite: 'Да',
        fileCover: 'war_and_peace_cover.jpg',
        fileName: 'war_and_peace.txt',
    });

    try {
        await newBook.save();
        res.json(newBook);
    } catch (error) {
        res.status(500).json(error);
    }

    console.log('Война и мир для теста');
});


// Получить книгу по ID	Получаем объект книги, если запись не найдена, вернём Code: 404
router.get('/api/books/:id', async function(req, res){
    const {id} = req.params

    
    res.json(`Получить книгу по ID:${id}`)

    try {
        
    } catch (error) {
        res.status(500).json(error)
    }
    console.log('Получить книгу по ID', id)
})

// Создать книгу	Создаём книгу и возвращаем её же вместе с присвоенным ID
router.post('/api/books', async function(req, res){

    res.json('Создать книгу')
        
    try {
        
    } catch (error) {
        res.status(500).json(error)
    }
    console.log('Создать книгу')
})

// Редактировать книгу по ID	Редактируем объект книги, если запись не найдена, вернём Code: 404
router.put('/api/books/:id', async function(req, res){
    const {id} = req.params

    console.log('Редактировать книгу по ID', id)
    res.json(`Редактировать книгу по ID:${id}`)

    try {
        
    } catch (error) {
        res.status(500).json(error)
    }
})

// Удалить книгу по ID	Удаляем книгу и возвращаем ответ: ok
router.delete('/api/books/:id', async function(req, res){
    const {id} = req.params
    console.log('Удалить книгу по ID')
    res.json(`Удалить книгу по ID: ${id}`)
        
    try {
        
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router
const express = require('express')
const router = express.Router()
const { v4: uuid } = require('uuid')
const fs = require ('fs')
const books = require('../models/books')

// Получить все книги (Получаем массив всех книг)
router.get('/api/books', async function(req, res){
    
    try {
        const book = await books.find().select('-__v')
        res.json(book)
    } catch (error) {
        res.status(500).json(error)
    }
    console.log('Получить все книги	Получаем массив всех книг')
})

// Получить книгу по ID	(Получаем объект книги, если запись не найдена, вернём Code: 404)
router.get('/api/books/:id', async function(req, res){
    const {id} = req.params
    
    try {
        const book = await books.findById(id).select('-__v')
        res.json(book)
        console.log('Получить книгу по ID', id)
    } catch (error) {
        res.status(404).json(`404 || Книги с id: ${id} не найдено`)
        console.log('404 || Книги не найдена', id)
    }
    
})

// Создать книгу (Создаём книгу и возвращаем её же вместе с присвоенным ID)
router.post('/api/books', async function(req, res){
    const {title, description, authors, favorite, fileCover, fileName} = req.body
    const book = new books({title, description, authors, favorite, fileCover, fileName})
        
    try {
        await book.save();
        res.json(book)
        console.log('Создать книгу', book.id)
    } catch (error) {
        res.status(500).json(error)
    }
    
})

// Редактировать книгу по ID (Редактируем объект книги, если запись не найдена, вернём Code: 404)
router.put('/api/books/:id', async function(req, res){
    const {id} = req.params
    const {title, description, authors, favorite, fileCover, fileName} = req.body

    try {
        await books.findByIdAndUpdate(id, {title, description, authors, favorite, fileCover, fileName})
        res.redirect(`/api/books/${id}`)
        console.log('Редактировать книгу по ID', id)

    } catch (error) {
        res.status(500).json(`404 || Книги с id: ${id} не найдено`)
        console.log('404 || Книги не найдена', id)
    }
    
})

// Удалить книгу по ID	Удаляем книгу и возвращаем ответ: ok
router.delete('/api/books/:id', async function(req, res){
    const {id} = req.params
    
    try {
        await books.deleteOne({_id:id})
        res.json(`Книга с id ${id} Удалена`)
        console.log('Удалить книгу по ID')
    } catch (error) {
        res.status(500).json(`404 || Книги с id: ${id} не найдено`)
        console.log('404 || Книги не найдена', id)
    }
    
})

module.exports = router
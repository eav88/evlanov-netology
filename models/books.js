const { Schema, model } = require('mongoose')
const { v4: uuid } = require('uuid')
const booksSchema = new Schema({

    title:{
        type: String,
        required: true,
        default: "title",
    },

    description: {
        type: String,
        required: true,
        default: "description",
    },
    
    authors:{
        type: String,
        required: true,
        default: "authors",
    },

    favorite:{
        type: String,
        default: "favorite",
    },

    fileCover:{
        type: String,
        default: "fileCover",
    },

    fileName:{
        type: String,
        default: "fileName",
    },
})

module.exports = model('library', booksSchema)


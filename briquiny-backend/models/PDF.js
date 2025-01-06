const mongoose = require('mongoose')
const {model} = require('mongoose')

const pdfSchema = new mongoose.Schema({
    nom: String,
    fichier: Buffer,
})

const PDF = mongoose.model('PDF', pdfSchema)

module.exports = PDF
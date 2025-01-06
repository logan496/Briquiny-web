const mongoose = require('mongoose')
const {model} = require('mongoose')

const DateConcour = new mongoose.Schema({
    ets:{
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: String,
        required: true
    }
})

Dates = model('Dates', DateConcour)

module.exports = Dates
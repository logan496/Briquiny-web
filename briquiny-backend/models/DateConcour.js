const mongoose = require('mongoose')
const {model} = require('mongoose')

const DateConcour = new mongoose.Schema({
    ets:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

const Dates = mongoose.model('Dates',DateConcour)

module.exports = Dates
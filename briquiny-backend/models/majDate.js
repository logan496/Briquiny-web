const { mongooose } = require('mongoose')
const maj =  require('../middleware/majDate')
const mongoose = require("mongoose");

const Price = mongooose.model('Price', new mongooose.Schema({
    dateFrom: {
        type: String,
        required: true,
        set: date => maj(date)
    },
    dateTo: {
        type: String,
        required: true,
        set: date => maj(date)
    }
}))

module.exports = mongoose.model('majDate', Price)
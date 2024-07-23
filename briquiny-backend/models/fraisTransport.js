const mongoose = require("mongoose")
const {model} = require("mongoose");

const fraisTransport = new mongoose.Schema({
    ets:{
        type: String,
        required: true
    },
    trim1:{
        type: Number,
        required: true
    },
    trim2:{
        type: Number,
        required: true
    },
    trim3:{
        type: Number,
        required: true
    }
})

const Transport = mongoose.model('Transport',fraisTransport)

module.exports = Transport
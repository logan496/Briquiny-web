const mongoose = require("mongoose")
const {model} = require("mongoose");

const fraisTransport = new mongoose.Schema({
    ets:{
        type: String,
        required: true,
    },
    zones :{
        type: String,
        required: true,
        unique: true
    },
    montant: {
        type: Number,
        required: true
    }
})

const Transport = mongoose.model('Transport',fraisTransport)

module.exports = Transport
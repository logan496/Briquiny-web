const mongoose = require("mongoose")
const {model} = require("mongoose");

const frasiTransport = new mongoose.Schema({
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

const Transport = mongoose.model('Transport',frasiTransport)

module.exports = Transport
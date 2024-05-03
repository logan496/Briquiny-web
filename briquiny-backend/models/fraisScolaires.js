const mongoose = require('mongoose')
const {model} = require("mongoose");
const schema = mongoose.Schema

const fraisScolaires = new schema({
    ets:{
        type: String,
        required: true,
        unique: true
    },
    cycle:{
        type: String,
        required: true,
        unique: true
    },
    montant:{
        type: Number,
        required: true
    },
    montantInscription: {
        type: Number,
        required: true
    }
})
const Scolaire = model('Scolaire', fraisScolaires)

module.exports = Scolaire


const mongoose = require('mongoose')
const {model} = require("mongoose");
const schema = mongoose.Schema

const fraisScolaires = new schema({
    ets:{
        type: String,
        required: true,
    },
    cycle:{
        type: String,
        required: true,
        unique: true
    },
    montantInscription: {
        type: Number,
        required: true
    },
    tranche1:{
        type: Number,
        required: true
    },
    tranche2:{
        type: Number,
        required: true
    },
    tranche3:{
        type: Number,
        required: true
    }
})
const Scolaire = model('Scolaire', fraisScolaires)

module.exports = Scolaire


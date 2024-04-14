const mongoose = require('mongoose')
const schema = mongoose.Schema

const fraisScolaires = new schema({
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


module.exports = mongoose.model('frais', fraisScolaires)


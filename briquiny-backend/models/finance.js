const mongoose = require('mongoose')
const schema = mongoose.Schema

const fraisScolaires = new schema({
    cycle: {type: String, required: true},
    montant: {type: Number, required: true},
})

// const fraistransport =  new schema({
//     zones: {type: String, required: true},
//     montant: {type: Number, required: true},
// })
//
// const results = new schema({
//     annee: {type: Number, required: true},
//     pourcentage: {type:Number, required: true},
// })

module.exports = mongoose.model('thing', fraisScolaires)


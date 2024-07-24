const mongooose = require('mongoose')
const {model} = require('mongoose')

const Pourcentage = new mongooose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    exams: {
        type: String,
        required: true,
        unique: true
    },
    year: {
        type: Number,
        required: true
    },
    pourcentage: {
        type: Number,
        required: true
    }
})

const Percent =  model('Percent', Pourcentage)

module.exports = Percent

const mongooose = require('mongoose')
const {model} = require('mongoose')

const Pourcentages = new mongooose.Schema({
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

const Percent = mongooose.model('Percent', Pourcentages)

module.exports = Percent

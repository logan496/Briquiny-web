const finance = require('../models/finance')
const {model} = require("mongoose");

class Managefinance {

    static async add(req, res){
        const finance = new finance({
            ...req.body
        })
        finance.save()
            .then(()=> res.status(201).json({message: 'Objet enregistré'}))
            .catch(error => res.status(400).json({error}))
    }
    static async delete(req, res){

    }
    static async show(req, res){

    }
}

module.exports = Managefinance
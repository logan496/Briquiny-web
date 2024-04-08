const finance = require('../models/finance')
const {model} = require("mongoose");

class Managefinance {

    static async add(req, res){
        const finance1 = new finance({
            ...req.body
        })
        await finance1.save()
            .then(()=> res.status(201).json({message: 'Objet enregistré'}))
            .catch(error => res.status(400).json({error}))
    }
    static async delete(req, res){

    }
    static async show(req, res){

    }
}

module.exports = Managefinance
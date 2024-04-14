const {AddCycle} = require ("../middleware/addCycle")
const {AddZone} = require("../middleware/AddZone")
const Transport = require("../models/fraisTransport")
class Create{
    static async addByCylce(req, res){
        try{
            const {cycles, prix, prixInscription} =  req.body
            await AddCycle(cycles, prix,prixInscription)
                .then(()=> res.status(201).json({message: 'cycle enregistré'}))
                .catch(error => res.status(400).json({error}))
        }catch (error){
            res.status(500).json({error})
        }

    }
    static async AddByZone(req, res){
        try{
            const{zone, prix} = req.body
            await AddZone(zone, prix)
                .then(()=> res.status(201).json({message: 'Nouvelle zone enregistrée'}))
                .catch(error => res.status(400).json({error}))
        }catch (error){
            res.status(500).json({error})
        }
    }

}

module.exports = Create
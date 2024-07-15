const {AddCycle} = require ("../middleware/addCycle")
const {AddZone} = require("../middleware/AddZone")
const Transport = require("../models/fraisTransport")
class Create{
    static async addByCylce(req, res){
        try{
            const {cycles, prix, prixInscription, etablissement} =  req.body
            await AddCycle(cycles, prix,prixInscription, etablissement)
                .then(()=> res.status(200).json({message: 'cycle enregistré'}))
                .catch(error => res.status(400).json({error}))
        }catch (error){
            res.status(500).json({error})
        }

    }
    static async AddByZone(req, res){
        try{
            const{etablissement ,zone, montants} = req.body
            await AddZone(zone, montants, etablissement)
                .then(()=> res.status(200).json({message: 'Nouvelle zone enregistrée'}))
                .catch(error => res.status(400).json({error}))
        }catch (error){
            res.status(500).json({error})
        }
    }

}

module.exports = Create
const Transport = require("../models/fraisTransport")
const DateConcour = require("../models/DateConcour")
import {AddCycle} from "../middleware/addCycle";
import {AddZone} from "../middleware/AddZone";
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
            const{zones, prix} = req.body
            await AddZone(zones, prix)
                .then(()=> res.status(201).json({message: 'Nouvelle zone enregistrée'}))
                .catch(error => res.status(400).json({error}))
        }catch (error){
            res.status(500).json({error})
        }
    }

}

module.exports = Create
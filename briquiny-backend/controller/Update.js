const Transport = require("../models/fraisTransport")
const Scolarite = require("../models/fraisScolaires")
const DateConcour = require("../models/DateConcour")
const Percent = require("../models/pourcentages")
const upPDF = require("../middleware/UpdatePDF")


class Update{
    static async UpdateTransportPrice(req, res){
        const {zones, nouv_montant} = req.body
        await Transport.updateOne({zones: zones}, {montant: nouv_montant})
            .then(()=> res.status(200).json({message: 'Prix modifié'}))
            .catch(error => res.status(400).json({error}))
    }

    static async UpdatePrice(req, res){
        const{cycles, nouv_montant} = req.body
        await Scolarite.updateOne({cycles: cycles}, {montant: nouv_montant})
            .then(()=> res.status(200).json({message: "Prix modifier"}))
            .catch(error => res.status(400).json({error}))

    }

    static async UpdatePriceInscription(req,res){
        const{cycles, montant_inscription} = req.body
        await Scolarite.updateOne({cycle: cycles}, {montantInscription: montant_inscription})
            .then(()=> res.status(200).json({message: "Prixe modifier"}))
            .catch(error=> res.status(400).json({error}))
    }

    static async UpdateZones(req, res){
        const {zone} = req.body
        await Transport.updateOne({zones: zone}, {zones: zone})
            .then(()=> res.status(200).json({message: "modification réussie"}))
            .catch(error => res.status(400).json({error}))
    }

    static async UpdateCycle(req, res){
        const {cycle} = req.body
        await Scolarite.updateOne({cycles: cycle}, {cycles: cycle})
            .then(()=> res.status(200).json({message: "Modification réussie"}))
            .catch(error => res.status(400).json({error}))
    }

    static async UpdateDate(req, res){
        const {Ets,date} = req.body
        await DateConcour.updateOne({ets: Ets}, {Date: date})
            .then(()=> res.status(200).json({message: "Modification réussie"}))
            .catch(error => res.status(400).json({error}))
    }

    static async UpdatePercent(req, res){
        const {percent, exam} = req.body
        await Percent.updateOne({exams: exam}, {pourcentage: percent})
            .then(()=> res.status(200).json({message: "Modification réussie"}))
            .catch(error => res.status(400).json({error}))
    }

    static async UpdatePDF(req, res){
        const {path, name} = req.file
        await upPDF.upPDF(name, path)
            .then(() => res.status(200).json({message: "Fichier enregistré"}))
            .catch(error => res.status(400).json({error}))
    }
}


module.exports =  Update
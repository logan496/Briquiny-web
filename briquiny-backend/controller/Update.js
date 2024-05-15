const Transport = require("../models/fraisTransport")
const Scolarite = require("../models/fraisScolaires")
const DateConcour = require("../models/DateConcour")
const Percent = require("../models/pourcentages")

class Update{
    static async UpdateTransportPrice(req, res){
        const {zone, nouv_montant} = req.body
        await Transport.findOneAndUpdate(
            {zones: zone},
            {montant: nouv_montant},
            {new: true}
        )
            .then(updated => {
                if (updated) res.status(200).json({message: "modification réussie"})
                else res.status(400).json({message: "echec de la modification"})
            })
            .catch(error => {
                res.status(500).json({message: "internal error"})
                console.log(error)
            })
    }

    static async UpdatePrice(req, res){
        const{cycles, nouv_montant} = req.body
        console.log(req.body)
        await Scolarite.findOneAndUpdate(
            {cycle: cycles},
            {montant: nouv_montant},
            {new:true}
        )
            .then(updated => {
                if (updated) res.status(200).json({message: "modification réussie"})
                else res.status(400).json({message: "echec de la modification"})
            })
            .catch(error => {
                res.status(500).json({message: "internal error"})
                console.log(error)
            })
    }

    static async UpdatePriceInscription(req,res){
        const{cycles, montant_inscription} = req.body
        console.log(req.body)
        await Scolarite.findOneAndUpdate(
            {cycle: cycles},
            {montantInscription: montant_inscription},
            {new: true}
        )
            .then(updated => {
                if (updated) res.status(200).json({message: "modification réussie"})
                else res.status(400).json({message: "echec de la modification"})
            })
            .catch(error => {
                res.status(500).json({message: "internal error"})
                console.log(error)
            })
    }

    static async UpdateDate(req, res){
        const {Ets,date} = req.body
        await DateConcour.findOneAndUpdate(
            {ets: Ets},
            {date: date},
            {new: true}
        )
            .then(updated => {
                if (updated) res.status(200).json({message: "modification réussie"})
                else res.status(400).json({message: "échec de la modification"})
            })
            .catch(error => {
                res.status(500).json({message: "internal error"})
                console.log(error)
            })
    }

    static async UpdatePercent(req, res){
        const {percent, exam} = req.body
        await Percent.findOneAndUpdate(
            {exams: exam},
            {pourcentage: percent},
            {new: true}
        )
            .then(updated => {
                if (updated) res.status(200).json({message: "modification réussie"})
                else res.status(400).json({message: 'modification échouée'})
            })
            .catch(error => {
                res.status(500).json({message: "internal error"})
                console.log(error)
            })
    }
}

module.exports =  Update
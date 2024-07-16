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


    static async UpdatePriceTranche(req, res){
        const{cycles, nouv_tranche, nbr_tranche} = req.body
        if(nbr_tranche === 1){
            await Scolarite.findOneAndUpdate(
                {cycle: cycles},
                {tranche1: nouv_tranche},
                {new: true}
            )
                .then(update => {
                    if (update) res.status(200).json({message: "Modification de prix réussie"})
                    else res.status(200).json({message: "Echec de la mise à jour"})
                })
                .catch(error =>{
                    res.status(500).json({message: "internal error", error})
                    console.log(error)
                } )
        }else if(nbr_tranche === 2){
            await Scolarite.findOneAndUpdate(
                {cycle: cycles},
                {tranche2: nouv_tranche},
                {new: true}
            )
                .then(update => {
                    if (update) res.status(200).json({message: "Modification de prix réussie"})
                    else res.status(200).json({message: "Echec de la mise à jour"})
                })
                .catch(error =>{
                    res.status(500).json({message: "internal error", error})
                    console.log(error)
                } )
        }else(
            await Scolarite.findOneAndUpdate(
                {cycle: cycles},
                {tranche3: nouv_tranche},
                {new: true}
            )
                .then(update => {
                    if (update) res.status(200).json({message: "Modification de prix réussie"})
                    else res.status(200).json({message: "Echec de la mise à jour"})
                })
                .catch(error =>{
                    res.status(500).json({message: "internal error", error})
                    console.log(error)
                } )
        )
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

    static async UpdateYearDate(req, res){
        const {Ets, year} = req.body
        await DateConcour.findOneAndUpdate(
            {ets: Ets},
            {year: year},
            {new: true}
        )
            .then(update => {
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
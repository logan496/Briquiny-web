const Transport = require("../models/fraisTransport")
const Scolarite = require("../models/fraisScolaires")
const DateConcour = require("../models/DateConcour")
const Percent = require("../models/pourcentages")

class Delete{
    static async DeleteByZones(req, res){
        const {Ets} = req.body
        await Transport.deleteOne({ets: Ets})
            .then(() => res.status(200).json({message: "Suppression réussie"}))
            .catch(error => res.status(400).json({error}))
    }
    // static async DeleteByCycle(req, res){
    //     const {cycle} = req.body
    //     await Scolarite.deleteOne({cycles: cycle})
    //         .then(()=> res.status(200).json({message: "Suppression réussie"}))
    //         .catch(error => res.status(400).json({error}))
    // }

    static async DeleteByCycle(req, res){
        const {cycles} = req.body
        await Scolarite.findOneAndDelete(
            {cycle: cycles},
        )
            .then(del => {
                if(del) res.status(200).json({message: "Suppression du cycle réussie"})
                else res.status(400).json({message: "echec de la suppression"})
        })
            .catch(error => {
                res.status(500).json({message: "internal error", error})
                console.log(error)
            })
    }

    static async DeleteDate(req, res){
        const{Ets} = req.body
        await DateConcour.findOneAndDelete(
            {ets: Ets}
        )
            .then(del => {
                if(del) res.status(200).json({message: "Suppression de la date réussie"})
                else res.status(400).json({message: "echec de la suppression"})
            })
            .catch(error => {
                res.status(500).json({message: "internal error", error})
                console.log(error)
            })
    }

    static async DeletePercent(req, res){
        const{ID} = req.body
        await Percent.findOneAndDelete(
            {id: ID}
        )
            .then(del => {
                if(del) res.status(200).json({message: "Suppression réussie"})
                else res.status(400).json({message: "echec"})
            })
            .catch(error => {
                res.status(500).json({message: "internal error"})
                console.log(error)
            })
    }
}

module.exports = Delete
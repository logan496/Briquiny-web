const Transport = require("../models/fraisTransport")
const Scolaire = require("../models/fraisScolaires")
const Percent = require("../models/pourcentages")

class Render{
    static async renderTransportInformations(req, res){
        const {etablissement} = req.body
        if (etablissement === "col"){
            Transport.find({ets: etablissement})
                .then(transport => res.status(200).json(transport))
                .catch(error => res.status(400).json({error}))
        }
        else if(etablissement === "kotto"){
            Transport.find({ets: etablissement})
                .then(transport => res.status(200).json(transport))
                .catch(error => res.status(400).json({error}))
        }
        else if(etablissement === 'log'){
            Transport.find({ets: etablissement})
                .then(transport => res.status(200).json(transport))
                .catch(error => res.status(400).json({error}))
        }
    }

    // static async renderScolariteInformation(req, res){
    //     const{etablissement} = req.body
    //     if (etablissement === "col"){
    //         Scolaire.find({ets: etablissement})
    //             .then(scolaire => res.status(200).json(scolaire))
    //             .catch(error => res.status(400).json({error}))
    //     }
    //     else if(etablissement === "kotto"){
    //         Scolaire.find({ets: etablissement})
    //             .then(scolaire => res.status(200).json(scolaire))
    //             .catch(error => res.status(400).json({error}))
    //     }
    //     else if(etablissement === 'log'){
    //         Scolaire.find({ets: etablissement})
    //             .then(scolaire => res.status(200).json(scolaire))
    //             .catch(error => res.status(400).json({error}))
    //     }
    // }

    static async renderScolariteInformation(req, res){
        const{cycles} = req.body
        Scolaire.find({cycle: cycles})
            .then(scolaire => res.status(200).json(scolaire))
            .catch(error => res.status(400).json({error}))
    }

    // static async renderScolariteInformation(req, res){
    //     const{Ets} = req.body
    //     Scolaire.find({ets: Ets})
    //         .then(scolaire => res.status(200).json(scolaire))
    //         .catch(error => res.status(400).json({error}))
    // }


    static async renderSuccessPercent(req, res){
        Percent.find()
            .then(percent => res.status(200).json(percent))
            .catch(error => res.status(400).json({error}))
    }
}

module.exports = Render
const Transport = require("../models/fraisTransport")
const Scolaire = require("../models/fraisScolaires")

class Render{
    static async renderTransportInformations(req, res){
        Transport.find()
            .then(transport => res.status(200).json({transport}))
            .catch(error => res.status(400).json({error}))
    }

    static async renderScolariteInformation(req, res) {
        Scolaire.find()
            .then(scolarite => res.status(200).json({scolarite}))
            .catch(error => res.status(400).json({error}))
    }
}

module.exports = Render
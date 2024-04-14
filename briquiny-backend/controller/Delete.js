const Transport = require("../models/fraisTransport")
const Scolarite = require("../models/fraisScolaires")

class Delete{
    async static DeleteByZones(req, res){
        const {zone} = req.body
        await Transport.deleteOne({zones: zone})
            .then(() => res.status(200).json({message: "Suppression réussie"}))
            .catch(error => res.status(400).json({error}))
    }

    async static DeleteByCycle(req, res){
        const {cycle} = req.body
        await Scolarite.deleteOne({cycles: cycle})
            .then(()=> res.status(200).json({message: "Suppression réussie"}))
            .catch(error => res.status(400).json({error}))
    }

}

module.exports = Delete
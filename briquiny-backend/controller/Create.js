const {AddCycle} = require ("../middleware/addCycle")
const {AddZone} = require("../middleware/AddZone")
const {CreateDateConcours} =require("../middleware/CreateDate")
const  {CreatePercent} = require("../middleware/CreatePercent")
const Transport = require("../models/fraisTransport")
class Create{
    static async AddByCylce(req, res){
        const {Ets, cycles, t1, t2, t3, prixInscription} = req.body
        await AddCycle(Ets, cycles, t1, t2, t3, prixInscription)
            .then(() => res.status(200).json({message: "cycle enregistré"}))
            .catch(error => res.status(400).json({error}))
    }
    static async AddByZone(req, res){
        try{
            const{etablissement, tr1, tr2, tr3} = req.body
            await AddZone(etablissement, tr1, tr2, tr3)
                .then(()=> res.status(200).json({message: 'Nouvelle zone enregistrée'}))
                .catch(error => res.status(400).json({error}))
        }catch (error){
            res.status(500).json({error})
        }
    }

    static async AddDate(req, res) {
        const{DateCon, Ets} =  req.body
        await CreateDateConcours(Ets, DateCon)
            .then(() => res.status(200).json({message: 'Nouvelle date de concous ajoutée'}))
            .catch(error => res.status(400).json({error}))
    }

    static async AddPercent(req, res) {
        const {Exams, Annee, percent } = req.body;
        const ID = Exams + Annee;
        await CreatePercent(ID, Exams, Annee, percent)
            .then(() => res.status(200).json({ message: "Nouveau pourcentage ajouté" }))
            .catch(error => res.status(400).json({ error }));
    }


}

module.exports = Create
//pour ajouter un nouveau cycle scolaire (sil, cp, CE1...)
const Scolarite = require('../models/fraisScolaires')

async function AddCycle(cycles, prix, prixInscription, etablissement){
    const scolarite = new Scolarite({
        cycle: cycles,
        montant: prix,
        montantInscription: prixInscription,
        ets: etablissement
    })
    await scolarite.save()
}

module.exports = {AddCycle}
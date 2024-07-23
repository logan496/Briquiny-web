//pour ajouter un nouveau cycle scolaire (sil, cp, CE1...)
const Scolarite = require('../models/fraisScolaires')

async function AddCycle(Ets, cycles, t1, t2, t3, prixInscription){
    const scolarite = new Scolarite({
        ets: Ets,
        cycle: cycles,
        tranche1 : t1,
        tranche2 : t2,
        tranche3 : t3,
        montantInscription: prixInscription
    })
    await scolarite.save()
}

module.exports = {AddCycle}
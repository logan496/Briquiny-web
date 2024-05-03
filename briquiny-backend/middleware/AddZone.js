const Transport = require('../models/fraisTransport')

async function AddZone(zone, montants, etablissement){
    const transport = new Transport({
        zones: zone,
        montant: montants,
        ets: etablissement
    });
    console.log(zone, montants)
    await transport.save()
}

module.exports = {AddZone}
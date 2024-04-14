const Transport = require('../models/fraisTransport')

async function AddZone(zone, montants){
    const transport = new Transport({
        zones: zone,
        montant: montants
    });
    console.log(zone, montants)
    await transport.save()
}

module.exports = {AddZone}
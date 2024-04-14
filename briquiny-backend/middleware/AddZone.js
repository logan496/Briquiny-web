const Transport = require('../models/fraisTransport')

async function AddZone(zones, montants){
    const transport = new Transport({
        zone: zones,
        montant: montants
    });
    await transport.save()
}

module.exports = {AddZone}
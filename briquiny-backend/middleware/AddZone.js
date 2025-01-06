const Transport = require('../models/fraisTransport')

async function AddZone(etablissement, tr1, tr2, tr3){
    const transport = new Transport({
        ets: etablissement,
        trim1: tr1,
        trim2: tr2,
        trim3: tr3
    });
    await transport.save()
}

module.exports = {AddZone}
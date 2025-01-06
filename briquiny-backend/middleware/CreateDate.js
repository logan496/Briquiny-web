const DateConcours = require("../models/DateConcour")

async function CreateDateConcours(Ets, DateCon){
    const dateC = new DateConcours({
        ets: Ets,
        date: DateCon
    })
    await dateC.save()
}

module.exports = {CreateDateConcours}
const MajModel = require('../middleware/majDate')
const majdate = require('../models/majDate')
class Maj{
    static async date_concour(req, res){
        const date = req.body
        if (date){
            majdate(date)
        }
    }
    static async infosScolarités(req, res){
        return null
    }
    static async infosInscriptions(req, res){
        return null
    }
    static async infosTransport(req,res){
        return null
    }
}

module.exports = Maj
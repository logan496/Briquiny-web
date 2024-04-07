const db = require('../utils/dbconnector')
const bcrypt = require('bcrypt')

class AdminModel{
    static async authenticate(email, password){
        return null
    }
}

module.exports = AdminModel;
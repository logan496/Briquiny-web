const db = require('../utils/dbconnector')
const bcrypt = require('bcrypt')

class AdminModel{
    static async authenticate(name, password){
        await User.findOne({name: name})
            .then(user =>{
                if(!user){
                    return null
                }
                bcrypt.compare(password, user.password)
                    .then(valid=>{
                        if(!valid){
                            return null
                        }
                    })
                    return user
            })
    }
}

module.exports = AdminModel;
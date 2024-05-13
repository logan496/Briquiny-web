const User = require('../models/User')
const bcrypt = require('bcrypt')

async function authenticate(name, password){
    try{
        const user = await User.findOne({name})
        const passwordMatch =  await bcrypt.compare(password, user.password)
        if(user && passwordMatch){
            return user
        }else {
            return 1
        }
    }catch (error){
        throw error
    }
}

module.exports = {authenticate}
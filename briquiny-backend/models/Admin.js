const bcrypt = require('bcrypt')

class AdminModel{
    static async authenticate(name, password, structure){
        // await User.findOne({name: name, structure: structure})
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
    static async verifyAdmin(name){
        await User.findOne({name: name})
            .then(user =>{
                if(user==="Briquiny-logbessou") {
                    return 3
                }else if(user==="Briquiny-kotto"){
                    return 1
                }else if(user==="GSB-briquiny"){
                    return 2
                }

            })
    }
}

module.exports = AdminModel;
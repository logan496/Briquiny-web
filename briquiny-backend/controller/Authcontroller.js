const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')
const Auth = require('../middleware/Authentification')

class AuthController{

    static async login(req, res){
        try {
            const {name, password} = req.body
            const User = await Auth.authenticate(name, password)
            if (User) {
                const token = jwt.sign(
                    {userId: User._id},
                    "secretkey",
                    {expiresIn: "1h"}
                )
                res.status(200).json({
                    userId: User._id,
                    token: token
                })
            } else {
                console.error("Email ou mot de passe incorrect")
                res.status(401).json({message: 'Email ou mot de passe incorect'})
            }
        }catch (error){
            res.status(500).json({message: error})
            console.log(error)
        }
    }
}

module.exports = AuthController
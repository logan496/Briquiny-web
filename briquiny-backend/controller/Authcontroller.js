const AdminModel = require('../models/Admin')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

class AuthController{

    static async login(req, res){
        const {name, password} = req.body
        const User = AdminModel.authenticate(name, password)
        if (User){

            res.status(200).json({
                userId: User._id,
                token: jwt.sign(
                    {userId: User._id},
                    "secretkey",
                    {expiresIn: "1h"}
                )
            })
                .catch(error => res.status(500).json({error}))
        }else{
            console.error("Email ou mot de passe incorrect")
            res.status(401).json({message: 'Email ou mot de passe incorect'})
        }
    }
    static async logout(req, res){
        return null
    }




}

module.exports = AuthController
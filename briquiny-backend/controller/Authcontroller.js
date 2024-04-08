const AdminModel = require('../models/Admin')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

class AuthController{

    static async login(req, res){
        const {name, password} = req.body
        try{
            const User = AdminModel.authenticate(name, password)
            if (User){
                // const userId =  User.id
                // const token = jwt.sign({userId, password}, 'secretkey', {expiresIn: '3600'})
                // res.status(200).json({message: 'Connexion réussie', User, token})
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
        }catch (error){
            console.error(error)
            res.status(500).json({message: error})
        }
    }
    static async logout(req, res){
        return null
    }
    static async verifyToken(req, res){
        try{
            const token = req.headers.authorization
            const decodedToken = jwt.verify(token, 'secretkey')
            const userId = decodedToken.userId
            req.auth ={

            }
            req.token = token
        }catch (error){
            res.status(401)
            console.log(error)
        }
    }

}

module.exports = AuthController
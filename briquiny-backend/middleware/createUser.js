const User = require('../models/User')
const bcrypt = require('bcrypt')

async function CreateUser(req, res){
    try{
        const {name, password} = req.body
        const crypPassword = await bcrypt.hash(password, 10)
        const newUser = new User({
            name: name,
            password: crypPassword
        })
        await newUser.save()
            .then(()=> {
                res.status(200).json({message: "utilisateur enregistré"})
            })
            .catch(error =>{
                res.status(500).json({message: "erreur lors de l'enregistrement de l'utilisateur", error})
            })
    }catch (error){
        console.error('Erreur lors de la création de l\'utilisateur')
    }

}

module.exports = CreateUser

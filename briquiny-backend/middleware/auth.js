const jwt = require('jsonwebtoken')
const {decode} = require("jsonwebtoken");

module.exports = (req, res, next) =>{
    try{
        const token = req.headers.authorization.split(' ')[1]
        const decodedToken = jwt.verify(token, 'secretkey')
        const userId = decodedToken.userId
        req.auth = {
            userId: userId
        }
        next()
        res.status(200).json({token})
    }catch (error){
        res.status(401).json({error})
    }
}
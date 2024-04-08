const express = require('express')
const app = express()
const router = require('./routes/router')

app.use(express.json())
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use('/briquiny', router)



app.listen(3000, ()=>{
    console.log('Serveur démarré sur le port 3000')
})

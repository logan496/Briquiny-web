const express = require('express')
const cors = require("cors")
const app = express()
const router = require('./routes/router')

require('./utils/dbconnector')
app.use(cors ({
    origin: 'http://localhost:5173',
    methods: 'GET,POST',
    allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/briquiny', router)


app.listen(3000, ()=>{
    console.log('Serveur démarré')
})



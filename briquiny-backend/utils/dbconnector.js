const mongoose = require('mongoose')

const conn = mongoose.connect('mongodb+srv://Logan:MLylSaJT5JM85rXY@briquiny.qw0tgpe.mongodb.net/?retryWrites=true&w=majority&appName=Briquiny',
    {useNewUrlParser: true,
            useUnifiedTopology: true})
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(()=> console.log('Connexion à MongoDB échouée !'))

module.exports = conn
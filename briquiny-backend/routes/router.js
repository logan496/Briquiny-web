const express = require('express')
const router = express.Router()

//importations de modules nécessaires
const AuthController = require('../controller/Authcontroller')
const renderInformation = require('../controller/render')
const createUser = require('../middleware/createUser')
const Update = require('../controller/Update')
const AddController = require('../controller/Create')
const DeleteController = require('../controller/Delete')
const multer = require('multer')
const PDF =  require('../models/PDF')


router.post('/admin/login', AuthController.login)
router.post('/admin/user', createUser)

//routes de modifications d'éléments
router.put('/admin/update/percent', Update.UpdatePercent)
router.put('/admin/update/year_exams', Update.UpdateYearDate)
router.put('/admin/update/cycle/price', Update.UpdatePriceTranche)
router.put('/admin/update/date', Update.UpdateDate)
router.put('/admin/update/cycle/price_inscription', Update.UpdatePriceInscription)
router.put('/admin/update/transport/price', Update.UpdateTransportPrice)



//routes pour créer de nouveaux éléments
router.post('/admin/create/transport', AddController.AddByZone)
router.post('/admin/create/cycle', AddController.AddByCylce)
router.post('/admin/create/date', AddController.AddDate)

//routes pour supprimer des éléments
router.delete('/admin/delete/zone', DeleteController.DeleteByZones)
router.delete('/admin/delete/cycle', DeleteController.DeleteByCycle)


//envoies des éléments au frontend
router.post('/admin/send/zone', renderInformation.renderTransportInformations)
router.post('/admin/send/cycle', renderInformation.renderScolariteInformation)
router.post('/admin/send/percent', renderInformation.renderSuccessPercent)


//gestion du remplaçement des ficheirs dans la BD
const storage = multer.memoryStorage()
const upload = multer({storage: storage})

router.put('/admin/file', upload.single('pdfFile'), (req, res) =>{
    if(!req.file){
        return res.status(400).json({message: "aucun fichier pdf détecter"})
    }

    const newPDF = new PDF({
        nom: req.file.originalname,
        fichier: req.file.buffer
    })

    newPDF.save()
        .then(() => res.status(200).json({message: "opération réussie"}))
        .catch(err => res.status(500).json({err, message: "erreur opération échouée"}))
})
module.exports = router;
const express = require('express')
const router = express.Router()

//importations de modules nécessaires
const AuthController = require('../controller/Authcontroller')
const renderInformation = require('../controller/render')
const createUser = require('../middleware/createUser')
const Update = require('../controller/Update')
const AddController = require('../controller/Create')
const DeleteController = require('../controller/Delete')
const req = require("express/lib/request");
// const file = require('../middleware/file')
// const multer = require('multer')

router.post('/admin/login', AuthController.login)
router.post('/admin/user', createUser)


//routes de modifications d'éléments
router.put('/admin/update/percent', Update.UpdatePercent)
router.put('/admin/update/cycle', Update.UpdateCycle )
router.put('/admin/update/cycle/price', Update.UpdatePrice)
router.put('/admin/update/date', Update.UpdateDate)
router.put('/admin/update/cylce/price_inscription', Update.UpdatePriceInscription)
router.put('/admin/update/transport/price', Update.UpdateTransportPrice)
router.put('/admin/update/transport/zone', Update.UpdateZones)



//routes pour créer de nouveaux éléments
router.post('/admin/create/transport', AddController.AddByZone)
router.post('/admin/create/cycle', AddController.addByCylce)

//routes pour supprimer des éléments
router.delete('/admin/delete/zone', DeleteController.DeleteByZones)
router.delete('/admin/delete/cycle', DeleteController.DeleteByCycle)


//envoies des éléments au frontend
router.post('/admin/send/zone', renderInformation.renderTransportInformations)
router.post('/admin/send/cycle', renderInformation.renderScolariteInformation)
router.post('/admin/send/percent', renderInformation.renderSuccessPercent)


module.exports = router;
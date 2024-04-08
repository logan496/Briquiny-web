const express = require('express')
const router = express.Router()

const FinanceController = require('../controller/financeController')
const AuthController = require('../controller/Authcontroller')
const auth = require('../middleware/auth')

router.get('/admin/login', AuthController.login)
router.get('/admin/kotto', auth)
router.get('/admin/logbessou', auth)
router.get('/admin/GSB-briquiny', auth)

module.exports = router;
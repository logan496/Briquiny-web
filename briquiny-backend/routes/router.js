const express = require('express')
const router = express.Router()

const FinanceController = require('../controller/financeController')
const AuthController = require('../controller/Authcontroller')
const auth = require('../middleware/auth')
const majController = require('../controller/Maj')

router.post('/admin/login', AuthController.login)
router.get('/admin/kotto', auth)
router.get('/admin/logbessou', auth)
router.get('/admin/GSB-briquiny', auth)

router.get('/admin/date', majController.date_concour)

module.exports = router;
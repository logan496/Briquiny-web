const express = require('express')
const router = express.Router()

const FinanceController = require('../controller/financeController')
const AuthController = require('../controller/Authcontroller')

router.post('/add', FinanceController.add)
router.post('/login', AuthController.login)
router.post('/logout', AuthController.logout)

module.exports = router;
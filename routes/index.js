const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const success = require('./modules/success')

router.use('/', home)
router.use('/success', success)

module.exports = router
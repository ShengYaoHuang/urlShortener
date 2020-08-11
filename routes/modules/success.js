const express = require('express')
const router = express.Router()
const Url = require('../../models/urlShortener')

router.get('/', (req, res) => {
  res.render('success')
})

module.exports = router
const express = require('express')
const router = express.Router()
const Url = require('../../models/urlShortener')
const randomUrl = require('../../url_shortener')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/success', (req, res) => {
  const inputUrl = req.body.inputUrl
  const headerUrl = req.headers.origin
  const shortenUrl = randomUrl()
  const successUrl = `${headerUrl}/${shortenUrl}`
  Url.find()
    .lean()
    .then((url) => {
      if (url.shortenUrl === shortenUrl) {
        shortenUrl = randomUrl()
      } else {
        Url.create({ inputUrl, shortenUrl })
          .then(() => {
            res.render('success', { inputUrl, successUrl })
          })
      }
    })
    .catch(error => console.log(error))
})

router.get('/:shortenUrl', (req, res) => {
  const shortenUrl = req.params.shortenUrl
  Url.findOne({ shortenUrl: `${shortenUrl}` })
    .lean()
    .then(url => {
      res.redirect(`${url.inputUrl}`)
    })
    .catch(error => console.log(error))
})

module.exports = router
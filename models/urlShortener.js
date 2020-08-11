const mongoode = require('mongoose')
const Schema = mongoose.Schema
const urlSchema = newSchema({
  url: String,
  shortenUrl: String
})

module.exports = mongoose.model('Url', urlSchema)
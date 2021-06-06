const mongoose = require('mongoose')
const shortId = require('shortid')

const shortUrlSchema = new mongoose.Schema({
  original: {
    type: String,
    required: true
  },
  generated: {
    type: String,
    required: true,
    default: shortId.generate
  }
})

module.exports = mongoose.model('ShortUrl', shortUrlSchema)
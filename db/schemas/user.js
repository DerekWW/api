const mongoose = require('../mongoose')

let userSchema = mongoose.Schema({
  name: String
})

module.exports = mongoose.model('User', userSchema)

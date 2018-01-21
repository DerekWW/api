const mongoose = require('../mongoose')

let userSchema = mongoose.Schema({
  firstName: {
    type:String,
    required: true
  },
  lastName: {
    type:String,
    required: true
  },
  dogs: []
})

module.exports = mongoose.model('User', userSchema)

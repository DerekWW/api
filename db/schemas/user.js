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
  dogs: [{type: mongoose.Schema.Types.ObjectId, ref: 'Dog'}]
})

module.exports = mongoose.model('User', userSchema)

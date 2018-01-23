const mongoose = require('../mongoose')
const Schema = mongoose.Schema

let dogSchema = Schema({
  name: {
    required: true,
    type: String
  }
})

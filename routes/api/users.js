const express = require('express')
const router = express.Router()
const User = require('../../db/schemas/user')

router.get('/', (req, res, next) => {
  res.send('at users')
})

router.post('/', (req, res, next) => {
  console.log(req.body)
  if (!req.body.name) {
    next('No Name Supplied')
  }
  let newUser = new User({
    name: req.body.name
  })

  newUser.save((err, newUser) => {
    if (err) {
      return console.error(err)
    }
    console.log(`User ${newUser.name} saved to db`)
    res.send(req.body)
  })
})

module.exports = router

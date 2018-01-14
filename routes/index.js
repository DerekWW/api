const router = require('express').Router()

router.use('/', require('./api/home'))
router.use('/api/users', require('./api/users'))
router.use('/api/auth', require('./api/auth'))

module.exports = router

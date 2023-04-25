const express = require('express')
const authMiddleware = require('../middlewares/auth')

const router = express.Router()

const {login,dashboard} = require('../controllers/main')

router.route('/login').post(login)

// add middleware on mutliple routes
// router.use(authMiddleware)
router.route('/dashboard').get(authMiddleware,dashboard)

module.exports=router
const Router = require('express')
const router = new Router()
const authRoutes = require('./authRoutes')

router.use('/user', authRoutes)

module.exports=router
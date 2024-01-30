const Router = require('express')
const router = new Router()
const authRoutes = require('./authRouter')
const deleteAllUserRouter = require('./deleteAllUserRouter')
const dataRoutes = require('./dataRoutes')
const updateUserRoutes = require('./updateUserRouter')


router.use('/user', authRoutes, deleteAllUserRouter, dataRoutes, updateUserRoutes)

module.exports=router
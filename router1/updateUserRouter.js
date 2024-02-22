const Router = require('express')
const routes = new Router
const updateUserController = require('../controller1/updateUserController')
const authMiddleware = require('../authMiddleware')

routes.patch('/update_user', authMiddleware, updateUserController.update_user)

module.exports=routes
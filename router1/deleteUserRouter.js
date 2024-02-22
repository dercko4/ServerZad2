const Router = require('express')
const routes = new Router()
const deleteUserController = require('../controller1/deleteUserController')
const authMiddleware = require('../authMiddleware')

routes.delete('/delete_all_user', authMiddleware, deleteUserController.del_user)

module.exports=routes
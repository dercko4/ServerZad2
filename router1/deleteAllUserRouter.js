const Router = require('express')
const routes = new Router()
const deleteAllUserController = require('../controller1/deleteAllUserController')
const checkRoleMiddleware = require('../checkRoleWare')

routes.delete('/delete_all_user', checkRoleMiddleware('admin'),deleteAllUserController.del_all_users)

module.exports=routes
const Router = require('express')
const routes = new Router()
const deleteAllUserController = require('../controller1/deleteAllUserController')

routes.delete('/delete_all_user', deleteAllUserController.del_all_users)

module.exports=routes
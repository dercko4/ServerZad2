const Router = require('express')
const routes = new Router
const updateUserController = require('../controller1/updateUserController')

routes.patch('/update_user', updateUserController.update_user)

module.exports=routes
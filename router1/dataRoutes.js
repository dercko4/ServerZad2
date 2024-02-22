const Router = require('express')
const routes = new Router()
const dataController = require('../controller1/dataController')
const authMiddleware = require('../authMiddleware')
const checkRoleMiddleware = require('../checkRoleWare')


routes.get('/get_all_user', checkRoleMiddleware('admin'),dataController.getAll_user)
routes.get('/get_id_user', checkRoleMiddleware, dataController.getID_user)

module.exports=routes
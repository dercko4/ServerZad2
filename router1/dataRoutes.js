const Router = require('express')
const routes = new Router()
const dataController = require('../controller1/dataController')

routes.get('/get_all_user', dataController.getAll_user)
routes.get('/get_id_user/:id', dataController.getID_user)

module.exports=routes
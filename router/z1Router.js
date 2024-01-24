const Router = require('express')
const z1Controller = require('../controller/z1Controller')
const routes = new Router()

routes.get('/getall', z1Controller.getAll)
routes.get('/getid/:id', z1Controller.getID)

module.exports=routes
const Router = require('express')
const routes = new Router()
const z3Controller = require('../controller/z3Controller')

routes.post('/create', z3Controller.create)

module.exports=routes
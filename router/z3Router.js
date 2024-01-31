const Router = require('express')
const routes = new Router()
const z3Controller = require('../controller/z3Controller')
const authMiddleware = require('../authMiddleware')

routes.post('/create', authMiddleware, z3Controller.create)

module.exports=routes
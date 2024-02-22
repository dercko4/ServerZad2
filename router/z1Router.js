const Router = require('express')
const z1Controller = require('../controller/z1Controller')
const routes = new Router()
const checkRoleMiddleware = require('../checkRoleWare')
const authMiddleware = require('../authMiddleware')

routes.get('/root_getall',checkRoleMiddleware('admin'), z1Controller.root_getAll)
routes.get('/user_getall', authMiddleware, z1Controller.user_getAll)
routes.get('/user_getOne', authMiddleware, z1Controller.user_getOne)

module.exports=routes
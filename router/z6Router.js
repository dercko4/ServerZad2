const Router = require('express')
const routes = new Router()
const z6Controlller = require('../controller/z6Controller')
const checkRoleMiddleware = require('../checkRoleWare')
const authMiddleware = require('../authMiddleware')

routes.delete('/root_delete_all', checkRoleMiddleware('admin'),z6Controlller.root_del_all)
routes.delete('/user_delete_all', authMiddleware, z6Controlller.user_del_all)

module.exports=routes
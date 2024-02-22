const Router = require('express')
const routes = new Router()
const z4Controlller = require('../controller/z4Controlller')
const authMiddleware = require('../authMiddleware')

routes.patch('/update', authMiddleware, z4Controlller.update_todo)

module.exports=routes
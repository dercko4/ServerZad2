const Router = require('express')
const routes = new Router()
const z4Controlller = require('../controller/z4Controlller')

routes.patch('/update', z4Controlller.update_todo)

module.exports=routes
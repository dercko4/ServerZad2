const Router = require('express')
const routes = new Router()
const z5Controlller = require('../controller/z5Controller')

routes.delete('/delete_id/:id', z5Controlller.del_id)

module.exports=routes
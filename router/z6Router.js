const Router = require('express')
const routes = new Router()
const z6Controlller = require('../controller/z6Controller')

routes.delete('/delete_all', z6Controlller.del_all)

module.exports=routes
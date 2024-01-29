const Router = require('express')
const routes = new Router
const authController = require('../controller1/authController')

routes.post('/reg', authController.registration)
routes.post('/login', authController.login)

module.exports=routes
const Router = require('express')
const router = new Router()
const z3Router = require('./z3Router')
const z1Router=require('./z1Router')
const z4Router=require('./z4Router')


router.use('/todo', z3Router, z1Router, z4Router)

module.exports=router
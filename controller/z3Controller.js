const {ToDo} = require('../model/model')
const {QueryTypes} = require('sequelize')
const sequelize = require('../database')
class z3Controller
{
    async create(req, res)
    {
        const {title, description, isDone} = req.body
        const userIdUser = req.user.id_user
        const type = await ToDo.create({title, description, isDone, userIdUser})
        return res.json(type)
    }
}

module.exports= new z3Controller()
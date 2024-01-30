const { Sequelize } = require('../database')
const {QueryTypes} = require('sequelize')
const sequelize = require('../database')
const {ToDo} = require('../model/model')
class z1Controller
{
    async getAll(req, res)
    {
        const {isDone} = req.query
        const {order} = req.query
        let get_all
        //const get_all = await ToDo.findAll()
        if(isDone===undefined&&order===undefined)
        {
            get_all = await ToDo.findAll()
        }
        if(isDone!==undefined&&order===undefined)
        {
            get_all = await ToDo.findAll({where: {isDone}})
        }
        if(isDone===undefined&&order==1)
        {
            get_all = await ToDo.findAll({order: [['isDone']]})
        }
        if(isDone===undefined&&order==2)
        {
            get_all = await ToDo.findAll({order: [['isDone', 'DESC']]})
        }
        if(isDone===undefined&&order==3)
        {
            get_all = await ToDo.findAll({order: [['createdAt']]})
        }
        if(isDone===undefined&&order==4)
        {
            get_all = await ToDo.findAll({order: [['createdAt', 'DESC']]})
        }
        return res.json(get_all)
    }
    async getID(req, res)
    {
        const {id} = req.params
        const get_id = await ToDo.findAll({where: {id}})
        return res.json(get_id)
    }
}

module.exports = new z1Controller()
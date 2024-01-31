const { Sequelize } = require('../database')
const {QueryTypes} = require('sequelize')
const sequelize = require('../database')
const {User} = require('../model/model')
class dataController
{
    async getAll_user(req, res)
    {
        const data = await User.findAll()
        return res.json(data)
    }
    async getID_user(req, res)
    {
        const {id_user} = req.params
        const get_id = await User.findOne({where: {id_user}})
        return res.json(get_id)
    }
}

module.exports = new dataController()
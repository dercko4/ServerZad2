const { Sequelize } = require('../database')
const {QueryTypes} = require('sequelize')
const sequelize = require('../database')
const {User} = require('../model/model')
const ApiError = require('../ApiError')

class dataController
{
    async getAll_user(req, res)
    {
        const data = await User.findAll()
        return res.json(data)
    }
    async getID_user(req, res)
    {
        const {id_user} = req.user.id_user
        if(!id_user) return next(ApiError.badRequest('Не удаётся получить ID из токен. Пользователь либо не авторизован, либо ошибка ввода токена'))
        const get_id = await User.findOne({where: {id_user}})
        if(!get_id) return next(ApiError.badRequest(`Данные по ID=${id_user} отсутсвуют!`))
        return res.json(get_id)
    }
}

module.exports = new dataController()
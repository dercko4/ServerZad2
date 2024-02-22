const { Sequelize } = require('../database')
const {QueryTypes} = require('sequelize')
const sequelize = require('../database')
const {ToDo} = require('../model/model')
const ApiError = require('../ApiError')

class z1Controller
{
    async root_getAll(req, res)
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
    async user_getAll(req, res)
    {
        const userIdUser = req.user.id_user
        if(!userIdUser) return next(ApiError.badRequest('Не удаётся получить ID из токен. Пользователь либо не авторизован, либо ошибка ввода токена'))
        const get_id = await ToDo.findAll({where: {userIdUser}})
        if(!get_id) return next(ApiError.badRequest(`Не удается получить данные по ID=${userIdUser}`))
        return res.json(get_id)
    }
    async user_getOne(req, res)
    {
        const userIdUser = req.user.id_user
        if(!userIdUser) return next(ApiError.badRequest('Не удаётся получить ID из токен. Пользователь либо не авторизован, либо ошибка ввода токена'))
        const id = req.params.id
        if(!getOne) return next(ApiError.badRequest('Вы не ввели по какому ID тудушки нужно найти данные'))
        const getOne = sequelize.query(`SELECT * FROM "ToDos" WHERE id=${id}, userIdUser=${userIdUser}`)
        if(!getOne) return next(ApiError.badRequest('У Вас нет доступа к этим тудушкам!'))
    }
}

module.exports = new z1Controller()
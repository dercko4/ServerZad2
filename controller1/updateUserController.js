const { Sequelize } = require('../database')
const {QueryTypes} = require('sequelize')
const sequelize = require('../database')
const {User} = require('../model/model')
const bcrypt = require('bcrypt')

function check_login(id_user, login)
    {
        if(login) return `UPDATE users SET login='${login}' WHERE id_user=${id_user}`
        else return undefined
    }

class updateUserController
{
    async update_user(req, res)
    {
        const {id_user} = req.query
        if(!id_user) return res.json({messenge: "Вы не ввели какой ID нужно редактировать!"})
        const data = req.body
        let query_login=check_login(id_user, data.login)
        if(query_login)
        {
            await sequelize.query(query_login)
        }
        if(data.password)
        {
            const hashPassword = await bcrypt.hash(data.password, 5)
            await sequelize.query(`UPDATE users SET password='${hashPassword}' WHERE id_user=${id_user}`)
        }
        res.json({messege: "Данные изменены"})
    }
}

module.exports= new updateUserController()
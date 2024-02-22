const { Sequelize } = require('../database')
const {QueryTypes} = require('sequelize')
const sequelize = require('../database')
const {User} = require('../model/model')

class deleteUserController
{
    async del_user(req, res)
    {
        const userIdUser = req.user.id_user
        let query_del_all=`DELETE FROM users WHERE userIdUser=${userIdUser}`
        const test_del_all = await sequelize.query(query_del_all)
        if(test_del_all) res.send({messenge: `Пользователь ${req.user.login}`})
        else res.send({ERROR: "Не удалось удалить записи!"})
    }
}




module.exports= new deleteUserController()
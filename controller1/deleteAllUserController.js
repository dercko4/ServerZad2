const { Sequelize } = require('../database')
const {QueryTypes} = require('sequelize')
const sequelize = require('../database')
const {User} = require('../model/model')

class deleteAllUserController
{
    async del_all_users(req, res)
    {
        let query_del_all=`DELETE FROM users`
        const test_del_all = await sequelize.query(query_del_all)
        if(test_del_all) res.send({messenge: "Все записи удалены!"})
        else res.send({ERROR: "Не удалось удалить записи!"})
    }
}




module.exports= new deleteAllUserController()
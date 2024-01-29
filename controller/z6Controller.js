const { Sequelize } = require('../database')
const {QueryTypes} = require('sequelize')
const sequelize = require('../database')
const ToDo = require('../model/model')

class z5Controller
{
    async del_all(req, res)
    {
        let query_del_all=`DELETE FROM "ToDos"`
        const test_del_all = await sequelize.query(query_del_all)
        if(test_del_all) res.send({messenge: "Все записи удалены!"})
        else res.send({ERROR: "Не удалось удалить записи!"})
    }
}




module.exports= new z5Controller()
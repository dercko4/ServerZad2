const { Sequelize } = require('../database')
const {QueryTypes} = require('sequelize')
const sequelize = require('../database')
const ToDo = require('../model/model')

function del_id(id)
{
    if(id) return `DELETE FROM "ToDos" WHERE id=${id}`;
    else return undefined;
}
function select_id(id)
{
    if(id) return `SELECT * FROM "ToDos" WHERE id=${id}`;
    else return undefined;
}

class z5Controller
{
    async del_id(req, res)
    {
        const {id} = req.query
        if(!id) return res.send({ERROR: "Не удалось найти ID!"})
        let query_id=del_id(id)
        let check_id=await ToDo.findAll({where: {id}})
        if(!check_id[0]) return res.json({ERROR: `Данные по ID ${id} не найдены!`})
        try {
            await sequelize.query(query_id)
        } catch (error) {
            return res.send({ERROR: `Произошла неизвестная ошибка!`})
        }
        sequelize.query(query_id)
        res.send({messenge: `Данные по ${id} ID удалены!`})
    }
}

module.exports= new z5Controller()
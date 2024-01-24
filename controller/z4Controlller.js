const { Sequelize } = require('../database')
const {QueryTypes} = require('sequelize')
const sequelize = require('../database')
const ToDo = require('../model/model')


class z4Controller
{
    async update_todo(req, res)
    {
        const data = req.body
        const {id} = req.query
        const update_rows = await sequelize.query(`
        UPDATE "ToDos" SET id='${data.id}', title='${data.title}', description='${data.description}', "isDone"=${data.isDone} WHERE id=${id}
        `)
        return res.json(update_rows)
    }
}

module.exports= new z4Controller()
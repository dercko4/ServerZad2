const { Sequelize } = require('../database')
const {QueryTypes} = require('sequelize')
const sequelize = require('../database')
const {ToDo} = require('../model/model')

function up_data_id(id, data_id)
    {
        if(data_id) return `UPDATE "ToDos" SET id='${data_id}' WHERE id=${id}`
        else return undefined
    }
function up_data_title(id, data_title)
{
    if(data_title) return `UPDATE "ToDos" SET title='${data_title}' WHERE id=${id}`
    else return undefined
}
function up_data_description(id, data_description)
{
    if(data_description) return `UPDATE "ToDos" SET title='${data_description}' WHERE id=${id}`
    else return undefined
}
function up_data_isDone(id, data_isDone)
{
    if(data_isDone) return `UPDATE "ToDos" SET title='${data_isDone}' WHERE id=${id}`
    else return undefined
}
class z4Controller
{
    async update_todo(req, res)
    {
        const userIdUser = req.user.id_user
        const data = req.body
        let query_id=up_data_id(userIdUser, data.id)
        let query_title=up_data_title(userIdUser, data.title)
        let query_description=up_data_description(userIdUser, data.description)
        let query_isDone=up_data_isDone(userIdUser, data.isDone)
        if(query_id) await sequelize.query(query_id)
        if(query_title) await sequelize.query(query_title)
        if(query_description) await sequelize.query(query_description)
        if(query_isDone) await sequelize.query(query_isDone)
        return res.json({messenge: "Work!"})
    }
    
}

module.exports= new z4Controller()
const express = require('express')
require('dotenv').config()
const router = require('./router/index')
const {QueryTypes} = require('sequelize')
const sequelize = require('./database')
const PORT = 3100
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.use('/api', router)
app.get('/test', async(req,res) =>
{
    const get_all = await sequelize.query(`SELECT * FROM "ToDos"`)
    res.status(200).json(get_all)
}
)

const start = async () =>
{
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Сервер работает на порту ${PORT}`))
    }
    catch(e){
        console.log(e)
    }
}

start()
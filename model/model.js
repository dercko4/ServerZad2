const sequelize = require('../database')
const {DataTypes} = require('sequelize')

const ToDo = sequelize.define('ToDo',{
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    title: {type: DataTypes.STRING, allowNull: true},
    description: {type: DataTypes.STRING, allowNull: false},
    isDone: {type: DataTypes.BOOLEAN, allowNull: false}
})

module.exports = ToDo
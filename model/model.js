const sequelize = require('../database')
const {DataTypes} = require('sequelize')

const ToDo = sequelize.define('ToDo',{
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    title: {type: DataTypes.STRING, allowNull: true},
    description: {type: DataTypes.STRING, allowNull: false},
    isDone: {type: DataTypes.BOOLEAN, allowNull: false}
})

const User = sequelize.define('users', {
    id_user: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique:true, allowNull: true},
    password: {type: DataTypes.STRING, allowNull: true},
    role: {type: DataTypes.STRING, defaultValue: "user"}
})

User.hasMany(ToDo)
ToDo.belongsTo(User)

module.exports = {
    User,
    ToDo
}
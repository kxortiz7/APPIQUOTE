const { Sequelize } = require('sequelize')

const db = new Sequelize({
   dialect: 'postgres',
   host: 'localhost',
   username: 'postgres',
   password: 'pass123',
   database: 'quote',
   logging: false,
});

module.exports = { db }
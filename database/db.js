const mysql = require('mysql')
const yaml_config = require('node-yaml-config')

const config = yaml_config.load(__dirname + 'config.yaml')

const connection = mysql.createConnection({
    host: config.default.database.host,
    user: config.default.database.username,
    password: config.default.database.password,
    database: config.default.database.database
})

connection.connect(err => {
    if (err) throw err
    console.log("Successfully connected to the database")
})

module.exports = {connection}

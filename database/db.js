const mysql = require('mysql')
const config = require('../config')

const connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
})

connection.connect(err => {
    if (err) throw err
    console.log("Successfully connected to the database")
})

module.exports = {connection}

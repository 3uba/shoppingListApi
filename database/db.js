const mysql = require('mysql');
const yaml_config = require('node-yaml-config');

let connection;

const connect = async () => {
    if (connection) {
        return connection;
    }

    const config = await yaml_config.loadAsync(__dirname + '/../config.yaml');

    connection = mysql.createConnection({
        host: config.host,
        user: config.user,
        password: config.password,
        database: config.database,
    });

    return new Promise((resolve, reject) => {
        connection.connect((err) => {
            if (err) {
                reject(err);
            } else {
                console.log('Successfully connected to the database');
                resolve(connection);
            }
        });
    });
};

module.exports = {
    connect,
};
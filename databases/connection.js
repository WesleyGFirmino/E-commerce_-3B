const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    port: 7878,
    user: 'user_api',
    password: '123456',
    database: 'api_produtos'
});

module.exports = connection;
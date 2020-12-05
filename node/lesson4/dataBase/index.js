const mysql2 = require('mysql2');

let connection = mysql2.createConnection({
    user: 'root',
    password: 'root',
    database: 'autoshop',
    host: 'localhost'
});

module.exports = connection.promise();

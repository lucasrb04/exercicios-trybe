const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Seunome123456*',
  database: 'mvc_example'});

module.exports = connection;
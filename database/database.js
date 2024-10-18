const mysql = require("mysql2/promise");
const dbconfig = require("../config/config.json");

const pool = mysql.createPool({
  host: dbconfig.host,
  user: dbconfig.user,
  password: dbconfig.password,
  database: dbconfig.database,
  waitForConnections: true,
  connectionLimit: 50,
  queueLimit: 0,
});

module.exports = pool;

const mysql = require("mysql");
require('dotenv').config();


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",

    // dotenv npm used to mask personal password
    password: process.env.DB_PASSWORD,
    database: "burgers_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;



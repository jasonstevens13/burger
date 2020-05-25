const connection = require("../config/connection.js");


// Object for all our SQL statement functions.
const orm = {
    selectAll: (cb) => {
        let queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: (burger, cb) => {
        let queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?,?);";
        burger.devoured = 0;
        connection.query(queryString, [
            burger.burger_name, burger.devoured
        ] function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: (burger, cb) => {
        let queryString = "UPDATE burgers SET devoured=1 WHERE id=?;";

        connection.query(queryString, [
            burger.burger_name, burger.devoured
        ] function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

// Export the orm object for the model (burger.js).
module.exports = orm;

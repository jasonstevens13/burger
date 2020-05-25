const orm = require("../config/orm");


const burger = {
    selectAll: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },

    insertOne: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgers_Controller.js).
module.exports = burger;
const orm = require("../config/orm.js");


const burger = {
    selectAll: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },

    insertOne: function (cols, vals, cb) {
        orm.insertOne(cols, vals, function (res) {
            cb(res);
        });
    },

    updateOne: function (objColVals, condition, cb) {
        orm.updateOne(objColVals, condition, function (res) {
            cb(res);
        });
    },

};

// Export the database functions for the controller (burgers_Controller.js).
module.exports = burger;
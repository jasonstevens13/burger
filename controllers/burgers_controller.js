// require in express.js npm to create server
const express = require("express");

// declaring router variable to create api routes
const router = express.Router();

// Import the model (burger.js) to use its mysql database orm functions.
// The model represents the only table in the database "burgers"
const burger = require("../models/burger.js");

// api route at the root which does a selectAll to grab all table data
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);

        // the table results are rendered/sent to the index.handlebars file in the views directory
        // the handlebars file take the data and displays it therein
        res.render("index", hbsObject);
    });
});


// the insert one record route does just that; the request requires the new burger name and the devoured status (table column names)
router.post("/api/burgers", function (req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function (result) {
        // Sends back the ID of the new quote
        res.json({ id: result.insertId });
    });
});


// api route that updates one row/record in the table
router.put("/api/burgers/:id", function (req, res) {
    let condition = "id = " + req.params.id;

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});



// Export routes for server.js to use.
module.exports = router;

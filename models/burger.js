var orm = require("../config/orm");

var burger = {
    // Display all burgers in the db.
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    // Add a new burger to the db.
    insertOne: function(colToInput, valOfCol, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    // Change the devoured status to true.
    updateOne: function(colToInput, valOfCol, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

// Export at the end of the burger.js file.
module.exports = burger;
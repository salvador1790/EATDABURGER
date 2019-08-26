var connection = require("./connection");

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput;
        connection.query(queryString, function (err, results) {
            if (err) throw err;

            cb(results);
        });
    },

    insertOne: function (tableInput, colToInput, valOfCol,cb) {
        var queryString = "INSERT INTO " + tableInput;
        queryString += " (";
        queryString += colToInput.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(valOfCol.length);
        queryString += ") ";
        connection.query(queryString, function (err, results) {
            if (err) throw err;

            cb(results);
        });
    },

    updateOne: function (tableInput, colToInput, valOfCol,cb) {
        var queryString = "UPDATE " +  tableInput;
        queryString += " SET ";
		queryString += objToSql(colToInput);
		queryString += " WHERE ";
		queryString += valOfCol;
        connection.query(queryString, function (err, results) {
            if (err) throw err;
            cb(results);
        });
    }


}

module.exports = orm;
var express = require('express');

var router = express.Router();

var burger = require('../models/burger')

router.get('/',function(req,res){
    burger.selectAll(function(data){
        var object = {
            burgers: data
        };
        res.render("index",object)
    });
    
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([req.body.name], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});


module.exports = router;
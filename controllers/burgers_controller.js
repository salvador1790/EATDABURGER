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


module.exports = router;
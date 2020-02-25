var express = require('express')
var burger = require('../models/burger.js')

var router = express.Router()

router.get('/', function(req, res){
    burger.selectAll(function(burger_data){
        res.render('index', {burger_data})
        console.log(burger_data);
    });
});

router.post('/burgers/updateOne', function(req, res){
    burger.updateOne(req.body.burger_id, function(result){
        console.log(result);
        res.redirect('/')
    });
});

router.post('/burgers/insertOne', function(req, res){
    burger.insertOne(req.body.burger_name, function(result){
        console.log(result);
        res.redirect('/')
    });
});



module.exports = router;

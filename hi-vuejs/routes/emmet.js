//var models = require('../models');
var express = require('express');
var router = express.Router();
var cool = require('cool-ascii-faces');

router.get('/', function(req, res) {
    res.render('emmet',
        {
            title: 'emmet'
        }
    );
});

module.exports = router;

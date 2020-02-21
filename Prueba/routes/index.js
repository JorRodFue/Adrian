var express = require('express');
var router = express.Router();
const moment = require('moment')

/* GET home page. */
router.get('/', function (req, res, next) {

  res.render('index', {
    title: 'Express', hour: moment(new Date()).format('DD/MM/YYYY')
  });
});

module.exports = router;

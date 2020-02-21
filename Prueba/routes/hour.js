var express = require('express');
var router = express.Router();
const moment = require('moment')

/* GET home page. */
router.get('/', function (req, res, next) {
  const hour = moment(new Date()).format('HH:mm:ss')
  res.json({ hour })
})

module.exports = router;

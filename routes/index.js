var express = require('express');
var router = express.Router();
var indexRoutes = require('../controllers/index')

/* GET home page. */
router.get('/', indexRoutes.getBooks);

module.exports = router;

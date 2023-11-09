var express = require('express');
const Watch_controlers= require('../controllers/Watch');
var router = express.Router();
/* GET watches */
router.get('/', Watch_controlers.Watch_view_all_Page );
module.exports = router;

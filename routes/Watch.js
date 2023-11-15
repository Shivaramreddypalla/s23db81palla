var express = require('express');
const Watch_controlers= require('../controllers/Watch');
var router = express.Router();
/* GET watches */
router.get('/', Watch_controlers.Watch_view_all_Page );
module.exports = router;

/* GET detail costume page */
router.get('/detail', Watch_controlers.Watch_view_one_Page);

/* GET create costume page */
router.get('/create', Watch_controlers.Watch_create_Page);

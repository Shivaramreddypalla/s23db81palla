var express = require('express');
const Watch_controlers= require('../controllers/Watch');
var router = express.Router();

const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET watches */
router.get('/', Watch_controlers.Watch_view_all_Page );
module.exports = router;

/* GET detail watch page */
router.get('/detail', Watch_controlers.Watch_view_one_Page);

/* GET create watch page */
router.get('/create', Watch_controlers.Watch_create_Page);

/* GET create update page */
router.get('/update',secured, Watch_controlers.Watch_update_Page);

/* GET delete watch page */
router.get('/delete', Watch_controlers.Watch_delete_Page);


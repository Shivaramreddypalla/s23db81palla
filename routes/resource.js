var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Watch_controller = require('../controllers/Watch');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Watch.
router.post('/Watch', Watch_controller.Watch_create_post);
// DELETE request to delete Watch.
router.delete('/Watch/:id', Watch_controller.Watch_delete);
// PUT request to update Watch.
router.put('/Watch/:id', Watch_controller.Watch_update_put);
// GET request for one Watch.
router.get('/Watch/:id', Watch_controller.Watch_detail);
// GET request for list of all Watch items.
router.get('/Watch', Watch_controller.Watch_list);
module.exports = router;



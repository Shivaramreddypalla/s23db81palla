var Watch = require('../models/Watch');
// List of all Watches
exports.Watch_list = function(req, res) {
res.send('NOT IMPLEMENTED: Watch list');
};
// for a specific Watches.
exports.Watch_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Watch detail: ' + req.params.id);
};
// Handle Watch create on POST.
exports.Watch_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Watch create POST');
};
// Handle Watch delete form on DELETE.
exports.Watch_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Watch delete DELETE ' + req.params.id);
};
// Handle Watch update form on PUT.
exports.Watch_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Watch update PUT' + req.params.id);
};
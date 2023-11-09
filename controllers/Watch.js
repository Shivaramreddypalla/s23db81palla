var Watch = require('../models/Watch');
// List of all Vechile
exports.Watch_list = async function (req, res) {
    try {
        theWatch = await Watch.find();
        res.send(theWatch);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
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

// VIEWS
// Handle a show all view
exports.Watch_view_all_Page = async function (req, res) {
    try {
        theWatch = await Watch.find();
        res.render('Watch', { title: 'Watch Search Results', results: theWatch });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Watch create on POST.
exports.Watch_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Watch();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"watchPrice":"Rolex", "watchYear":2021, "watchPrice":1200}
    document.watchModel = req.body.watchModel;
    document.watchYear = req.body.watchYear;
    document.watchPrice = req.body.watchPrice;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};



    
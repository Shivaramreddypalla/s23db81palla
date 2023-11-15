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
exports.Watch_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Watch detail: ' + req.params.id);
};
// Handle Watch create on POST.
exports.Watch_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Watch create POST');
};

// Handle Watch update form on PUT.
exports.Watch_update_put = function (req, res) {
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

// for a specific Costume.
exports.Watch_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Watch.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle Costume update form on PUT.
exports.Watch_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Watch.findById(req.params.id)
        // Do updates of properties
        if (req.body.watchModel)
            toUpdate.watchModel = req.body.watchModel;
        if (req.body.watchYear) toUpdate.watchYear = req.body.watchYear;
        if (req.body.watchPrice) toUpdate.watchPrice = req.body.watchPrice;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};


// Handle Costume delete on DELETE.
exports.Watch_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Watch.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.Watch_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Watch.findById(req.query.id)
        res.render('Watchdetail',
            { title: 'Watch Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Watch_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('Watchcreate', { title: 'Watch Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};






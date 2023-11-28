const mongoose = require("mongoose")
const WatchSchema = mongoose.Schema({
 watchModel: {
        type: String,
        required: true
    },
    watchYear: {
        type: Number,
        required: true
    },
    watchPrice: {
        type: Number,
        required: true,
        min: 0,
        max: 5000
    }
});
module.exports = mongoose.model("Watch", 
WatchSchema)
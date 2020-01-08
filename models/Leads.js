const mongoose = require('mongoose');
const LeadsSchema = mongoose.Schema({
    vertical: {
        type: String
    },
    affiliate: {
        type: String
    },
    advertiser: {
        type: String
    },
    proposal: {
        type: String
    },
    fileId: {
        type: String
    }
});

module.exports = Leads = mongoose.model('lp-leads', LeadsSchema);
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    "lpFirstName": {
        type: String,
        required: true
    },
    "lpLastName": {
        type: String,
    },
    "lpUserEmail": {
        type: String,
        required: true,
        unique: true
    },
    "lpUserType": {
        type: String,
        required: true
    },
    "lpUserPass": {
        type: String,
        required: true
    }
});

module.exports = Users = mongoose.model('lp-users', UserSchema);
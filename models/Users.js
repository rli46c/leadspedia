const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    "userName": {
        type: String,
        required: true,
        unique: true
    },
    "userPass": {
        type: String,
        required: true
    }
});

module.exports = Users = mongoose.model('lp-users', UserSchema);
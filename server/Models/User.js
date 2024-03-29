const mongoose = require('mongoose');

const registration = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role:{
        type:String,
        required:true,
    },
    password: {
        type: String,
        required: true,
    }
});
module.exports = mongoose.model("Users", registration);

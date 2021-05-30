// //sign up will have
// //username
// //email
// //password
// //profile_id

const monogoose = require("mongoose");
const bcrypt = require("bcrypt");

const SignupSchema = new monogoose.Schema({
    key_id: {
        type: Number,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
    }
});

module.exports = SignupSchema;
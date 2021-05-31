const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const signupSchema = new Schema({
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

const Signup = mongoose.model("Signup", signupSchema);

module.exports = Signup;
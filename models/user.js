//This will call all of the models into one and be called by other pages that need it
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Username is Required",
  },

  email: {
    type: String,
    trim: true,
    required: "Password is Required",
  },

  linkedIn: {
    type: String,
  },

  gitHub: {
    type: String,
  },

  jobTitle: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

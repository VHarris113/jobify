//This will call all of the models into one and be called by other pages that need it
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: true,
  },

  email: {
    type: String,
    trim: true,
    required: true,
  },

  password: {
    type: String,
    trim: true,
    required: true,
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

  cloudinaryUrl: {
    type: String,
  },
  
  
});

const User = mongoose.model("User", userSchema);

module.exports = User;

//This will call all of the models into one and be called by other pages that need it
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formSchema = new Schema({
  userID: {
    type: String,
    trim: true,
    required: "Username is Required",
  },
  Company: {
    type: String,
    trim: true,
  },
  jobTitle: {
    type: String,
  },
  location: {
    type: String,
  },
  salary: {
    type: String,
  },
   listingUrl: {
    type: String,
  },
  dateApplied: {
    type: String,
  },
  followUpDate: {
    type: String,
  },
  Notes: {
    type: String,
  },
});

const User = mongoose.model("form", formSchema);

module.exports = User;
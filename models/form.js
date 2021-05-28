//This will call all of the models into one and be called by other pages that need it
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formSchema = new Schema({
  userID: {
    type: String,
    trim: true,
    required: "Username is Required",
  },
  company: {
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
    type: Number,
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
  notes: {
    type: String,
  },
});

module.exports = mongoose.model("form", formSchema);
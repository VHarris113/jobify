//This will call all of the models into one and be called by other pages that need it
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resumeSchema = new Schema({
  resumeUrl: {
    type: String,
    trim: true,
    required: "Username is Required",
  },

  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  
});

const Resume = mongoose.model("Resume", resumeSchema);

module.exports = Resume;


//I am making a note here so the code can push to heroku.
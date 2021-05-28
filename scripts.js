const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/jobify"
);

const jobSeed = [
    {
        company: "Stark Industries",
        jobTitle: "Intern",
        location: "New York, New York",
        salary: 30000,
        listingUrl: "http://starkindustries.com/job-intern",
        
    }
]
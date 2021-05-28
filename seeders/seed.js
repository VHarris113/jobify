const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/jobify", {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    }
);

const jobSeed = [
    {
        company: "Stark Industries",
        jobTitle: "Intern",
        location: "New York, New York",
        salary: 30000,
        listingUrl: "http://starkindustries.com/job-intern",
        dateApplied: "5/31/2021",
        followUpDate: "6/1/2021",
        notes: "This job looks amazing."
    },
    {
        company: "Google",
        jobTitle: "Front-End Programmer",
        location: "Atlanta, GA",
        salary: 90000,
        listingUrl: "http://www.googlejobs.com",
        dateApplied: "5/31/2021",
        followUpDate: "6/1/2021",
        notes: "This job definitely fits my skill set."
    },
    {
        company: "SHIELD",
        jobTitle: "Internet Security Professional",
        location: "New York, New York",
        salary: 100000,
        listingUrl: "https://www.SHIELD.gov/jobs/123",
        dateApplied: "5/31/2021",
        followUpDate: "6/1/2021",
        notes: "This may be difficult, but I think I can do it!"
    },
];

db.Form.deleteMany({})
    .then(() => db.Form.collection.insertMany(jobSeed))
    .then(data => {
        console.log(data.result.n + "job records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })
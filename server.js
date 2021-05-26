const express = require("express");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");
var cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));
// Define middleware here
// Jackson added code
app.use(express.static("public"));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(cors());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
// Define API routes here

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/jobify", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.on("connected", () => {
  console.log("Mongoose success");
});

connection.on("error", (error) => {
  console.log("Mongoose error", error);
});

app.use(require("./routes/api"));

// app.listen(PORT, () => {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });

app.listen(PORT, () => {
  console.log("listening on 3001");
});

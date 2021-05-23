const { cloudinary } = require("./utils/cloudinary.js");
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
app.use(express.static('public'));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(cors());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/jobify", {
  useNewUrlParser: true,
  useFindAndModify: false,
});


// app.listen(PORT, () => {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });

// Jackson added code
app.get('/api/images', async (req, res) => {
  const { resources } = await cloudinary.search
      .expression('folder:dev_setups')
      .sort_by('public_id', 'desc')
      .max_results(30)
      .execute();

  const publicIds = resources.map((file) => file.public_id);
  res.send(publicIds);
});
app.post('/api/upload', async (req, res) => {
  try {
      const fileStr = req.body.data;
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
          upload_preset: 'dev_setups',
      });
      console.log(uploadResponse);
      res.json({ msg: 'yaya' });
  } catch (err) {
      console.error(err);
      res.status(500).json({ err: 'Something went wrong' });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log('listening on 3001');
});


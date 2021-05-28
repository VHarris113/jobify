const router = require("express").Router();
const User = require("../models/User");
const { cloudinary } = require("../utils/cloudinary");
const mongoose = require("mongoose");
const withAuth = require("../utils/withAuth");
const jwt = require("jsonwebtoken");
const secret = "cheesecake";
//*********** Cloudinary **********/

// Route for getting users from the database
router.get("/api/user", (req, res) => {
  User.find({})
    .then((dbUsers) => {
      res.json(dbUsers);
      //console.log(dbUsers);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});


router.get("/api/images", async (req, res) => {
  const { resources } = await cloudinary.search
    .expression("folder:dev_setups")
    .sort_by("public_id", "desc")
    .max_results(30)
    .execute();

  const publicIds = resources.map((file) => file.public_id);
  res.send(publicIds);
});
router.post("/api/upload", async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "dev_setups",
    });
    console.log(uploadResponse);
    res.json({ msg: "upload successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Something went wrong" });
  }
});

/********Auth*********/

// router.get('/api/home', function(req, res) {
//   res.send('Welcome!');
// });

router.get("/api/secret", withAuth, function (req, res) {
  res.send("The password is potato");
});

router.post("/api/signup", function (req, res) {
  const { email, password } = req.body;
  console.log(req.body)
  const user = new User({ email, password });
  user.save(function (err) {
    if (err) {
      console.log(err);
      res.status(500).send("Error registering new user please try again.");
    } else {
      res.status(200).send("Welcome to the club!");
    }
  });
});

router.post("/api/login", function (req, res) {
  const { email, password } = req.body;
  User.findOne({ email }, function (err, user) {
    if (err) {
      console.error(err);
      res.status(500).json({
        error: "Internal error please try again",
      });
    } else if (!user) {
      res.status(401).json({
        error: "Incorrect email or password",
      });
    } else {
      user.isCorrectPassword(password, function (err, same) {
        if (err) {
          res.status(500).json({
            error: "Internal error please try again",
          });
        } else if (!same) {
          res.status(401).json({
            error: "Incorrect email or password",
          });
        } else {
          // Issue token
          const payload = { email };
          const token = jwt.sign(payload, secret, {
            expiresIn: "1h",
          });
          res.cookie("token", token, { httpOnly: true }).sendStatus(200);
        }
      });
    }
  });
});

router.get("/checkToken", withAuth, function (req, res) {
  res.sendStatus(200);
});

module.exports = router;

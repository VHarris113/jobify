const router = require("express").Router();
const { cloudinary } = require("../utils/cloudinary");
const mongoose = require("mongoose");
const withAuth = require("../utils/withAuth");
const jwt = require("jsonwebtoken");
const secret = "cheesecake";
const { Resume, User } = require("../models");
//*********** Cloudinary **********/

// Route for getting users from the database
router.get("/user", (req, res) => {
  User.find({ _id: req.user.id })
    .then((dbUsers) => {
      res.json(dbUsers);
      //console.log(dbUsers);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/images", async (req, res) => {
  const { resources } = await cloudinary.search
    .expression("folder:dev_setups")
    .sort_by("public_id", "desc")
    .max_results(30)
    .execute();

  const publicIds = resources.map((file) => file.public_id);
  res.send(publicIds);
});

router.post("/upload", async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "dev_setups",
    });
    console.log("req.body", req.body.userEmail);

    const userId = await User.findOne({ email: req.body.userEmail }).then(
      (dbUsers) => {
        console.log(dbUsers);
        //return the user inside here then you are good
        return(User)
      } 
    );

    Resume.create({
      resumeUrl: uploadResponse.secure_url,
      userId: userId,
    });

    res.json({ msg: "upload successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Something went wrong" });
  } 
});

/********Auth*********/

// router.get('/home', function(req, res) {
//   res.send('Welcome!');
// });

router.get("/secret", withAuth, function (req, res) {
  res.send("The password is potato");
});

router.post("/signup", function (req, res) {
  const { email, password } = req.body;
  console.log(req.body);
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

router.post("/login", function (req, res) {
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
          const payload = { email, id: user._id };
          const token = jwt.sign(payload, secret, {
            expiresIn: "1h",
          });
          res.cookie("token", token, { httpOnly: true }).sendStatus(200);
          console.log(token);
        }
      });
    }
  });
});

router.get("/checkToken", withAuth, function (req, res) {
  res.status(200).end();
});

module.exports = router;

const router = require("express").Router();
const User = require("../models/User");
const { cloudinary } = require("../utils/cloudinary");

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

router.post("/api/user", (req, res) => {
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

module.exports = router;

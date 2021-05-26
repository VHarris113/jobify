const router = require("express").Router();
const User = require("../models/User");
const { cloudinary } = require("../utils/cloudinary");
const mongoose = require("mongoose")
// const User = mongoose.model("User");

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

// route for signing up users
router.post('/signup',(req,res)=>{
  const {name,email,password} = req.body
  if(!email || !password || !name){
      res.json({error:"please add all the required fields"})
  }
  User.findOne({email:email})
  .then((dbUsers)=> {
    if(dbUsers){
      return res.status(422).json({error:"user already exists with that email"})
    }
    const user = new User({
      email: email,
      password: password,
      name: name,
    })
    user.save()
    .then(user=>{
      res.json({message:"saved successfully"})
    })
    .catch(err=>{
      console.log(err)
    })
  })
  .catch(err=>{
    console.log(err)
  })
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

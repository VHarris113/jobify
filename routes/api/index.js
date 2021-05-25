const router = require("express").Router();
const profileRoutes = require("./profile");
const loginRoutes = require("./login");

router.use("/profile", profileRoutes);
router.use("/user", loginRoutes);

module.exports = router;
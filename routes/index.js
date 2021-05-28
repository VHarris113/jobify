const router = require("express").Router();
const formRoutes = require("./form-route");

router.use("/insert", formRoutes);


module.exports = router;
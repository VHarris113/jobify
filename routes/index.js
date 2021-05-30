const router = require("express").Router();
const formRoutes = require("./form-route");
const apiRoutes = require("./api");

router.use("/api", apiRoutes);
router.use("/insert", formRoutes);

module.exports = router;

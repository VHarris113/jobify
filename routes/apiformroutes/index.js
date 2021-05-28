const router = require("express").Router();
const formRoutes = require("./form-route");

router.us("/insert", formRoutes);

module.exports = router;
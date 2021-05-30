const router = require("express").Router();
const formRoutes = require("./form-route");
const apiRoutes = require("./api");

router.use("/api", apiRoutes);
router.use("/insert", formRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;

var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    res.render("cadastro", { title: "Express" });
});

module.exports = router;
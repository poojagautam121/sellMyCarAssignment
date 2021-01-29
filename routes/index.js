var express = require("express");
var router = express.Router();
var oem = require("../controller/con-oemspecs");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/modelByYear", oem.modelByYear);
router.get("/countOemModel", oem.countOemModel);

module.exports = router;

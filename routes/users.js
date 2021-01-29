var express = require("express");
var router = express.Router();
var dealer = require("../controller/con-dealer");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

//Crud Routes

router.post("/addDealerInfo", dealer.addDealerInfo);
router.get("/getDealerInfo", dealer.getDealerInfo);
router.post("/updatedealerInfo", dealer.updatedealerInfo);
router.post("/deleteDealerInfo", dealer.deleteDealerInfo);

module.exports = router;

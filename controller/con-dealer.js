const models = require("../models");

// CRUD for Dealers

//http://localhost:1300/users/getDealerInfo
exports.getDealerInfo = (req, res) => {
  return models.marketPlace_inventory
    .findAll
    //   {
    //   where: { id: req.query.id },
    // }
    ()
    .then((result) => {
      let response = {
        statusCode: "200",
        msg: "Dealer Information",
        data: result,
      };
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });
};

//http://localhost:1300/users/addDealerInfo
exports.addDealerInfo = (req, res) => {
  return models.marketPlace_inventory
    .create({
      odometer: req.body.odometer,
      major_scarthes: req.body.major_scarthes,
      original_paint: req.body.original_paint,
      accident_reported: req.body.accident_reported,
      previous_buyers: req.body.previous_buyers,
      registration_place: req.body.registration_place,
      car_id: req.body.car_id,
      AddDate: models.sequelize.fn("GETDATE"),
      LastUpdate: models.sequelize.fn("GETDATE"),
    })
    .then((result) => {
      let response = {
        statusCode: 200,
        msg: "Dealer Information added",
      };

      res.send(response);
    })
    .catch((err) => {
      let error = {
        msg: "failed",
        err: err,
      };
      res.send(error);
    });
};

//http://localhost:1300/users/updatedealerInfo?car_id=3
exports.updatedealerInfo = (req, res) => {
  console.log("==called==");
  let update = {
    odometer: req.body.odometer,
    major_scarthes: req.body.major_scarthes,
    original_paint: req.body.original_paint,
    accident_reported: req.body.accident_reported,
    previous_buyers: req.body.previous_buyers,
    registration_place: req.body.registration_place,
  };
  models.marketPlace_inventory
    .update(update, {
      where: {
        car_id: req.query.car_id,
      },
    })
    .then((result) => {
      response = {
        statusCode: "200",
        msg: "data updated succusfully",
        data: result,
      };
      res.send(response);
    })
    .catch((err) => {
      console.log("==error==", err);
      res.send(err);
    });
};

//http://localhost:1300/users/deleteDealerInfo?car_id=4
exports.deleteDealerInfo = (req, res) => {
  return models.marketPlace_inventory
    .destroy({
      where: { car_id: req.query.car_id },
    })
    .then((result) => {
      console.log("==delete result==", result);
      let response = {
        statusCode: "200",
        msg: "Dealer Information deleted",
        data: result,
      };
      res.send(response);
    })
    .catch((err) => {
      console.log("==error==", err);
      res.send(err);
    });
};

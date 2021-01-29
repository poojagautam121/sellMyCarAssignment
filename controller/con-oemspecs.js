const models = require("../models");

//http://localhost:1300/modelByYear
exports.modelByYear = (req, res) => {
  console.log("req===", req.body);
  let modelYear = req.body.searchfield.split(/([0-9]+)/);
  console.log("+===modelyear===", modelYear);
  return models.oem_specs
    .findAll({
      raw: true,
      where: {
        model: modelYear[0],
        model_year: modelYear[1],
      },
    })
    .then((result) => {
      let response = {
        statusCode: "200",
        msg: "Records fetched succusfully",
        data: result,
      };
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });
};

//http://localhost:1300/countOemModel
exports.countOemModel = (req, res) => {
  console.log("===");
  return models.oem_specs
    .count({
      raw: true,
    })
    .then((result) => {
      let response = {
        statusCode: "200",
        msg:
          result == 0
            ? "No record found"
            : "No. of Oem models found succusfully",
        count: result,
      };
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });
};

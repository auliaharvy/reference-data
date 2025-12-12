module.exports = app => {
  const refs = require("../controllers/ref.controller.js");

  var router = require("express").Router();

  // Retrieve all Tutorials
  router.get("/", refs.findAll);

  router.get("/units", refs.findAllUnits);

  router.get("/goodsCodes", refs.findAllGoodsCodes);

  router.get("/serviceCodes", refs.findAllServiceCodes);

  router.get("/region", refs.findAllRegion);

  app.use("/api/refs", router);
};

module.exports = app => {
  const refs = require("../controllers/ref.controller.js");

  var router = require("express").Router();

  // Retrieve all Tutorials
  router.get("/", refs.findAll);

  app.use("/api/refs", router);
};

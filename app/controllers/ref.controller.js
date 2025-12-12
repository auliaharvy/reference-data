const { json } = require("express");
const db = require("../models");
const Ref = db.refs;
const RefUnit = db.refUnits;
const RefGoodsCodes = db.refGoodsCodes;
const RefServiceCodes = db.refServiceCodes;
const Region = db.region;

// Create and Save a new Tutorial
// exports.create = (req, res) => {
//   // Validate request
//   if (!req.body.code) {
//     res.status(400).send({ message: "Content can not be empty!" });
//     return;
//   }

//   // Create a Tutorial
//   const ref = new Ref({
//     code: req.body.code,
//     descriptionId: req.body.descriptionId,
//     descriptionEn: req.body.descriptionEn,
//     parameterData: req.body.parameterData,
//     referenceDataType: req.body.referenceDataType
//   });

//   // Save Tutorial in the database
//   ref
//     .save(ref)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the Tutorial."
//       });
//     });
// };

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const referenceDataType = req.query.referenceDataType;
  let condition = {};

  if (referenceDataType) {
    condition = { referenceDataType: { $regex: new RegExp(referenceDataType), $options: "i" } };
  }

  Ref.find(condition)
    .then(data => {
      res.json({
        code: 200,
        message: "References retrieved successfully",
        data: data
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.findAllUnits = (req, res) => {
  const referenceDataType = req.query.referenceDataType;
  let condition = {};

  if (referenceDataType) {
    condition = { referenceDataType: { $regex: new RegExp(referenceDataType), $options: "i" } };
  }

  RefUnit.find(condition)
    .then(data => {
      res.json({
        code: 200,
        message: "Unit retrieved successfully",
        data: data
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.findAllGoodsCodes = (req, res) => {
  const referenceDataType = req.query.referenceDataType;
  let condition = {};

  if (referenceDataType) {
    condition = { referenceDataType: { $regex: new RegExp(referenceDataType), $options: "i" } };
  }

  RefGoodsCodes.find(condition)
    .then(data => {
      res.json({
        code: 200,
        message: "Goods Codes retrieved successfully",
        data: data
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.findAllServiceCodes = (req, res) => {
  const referenceDataType = req.query.referenceDataType;
  let condition = {};

  if (referenceDataType) {
    condition = { referenceDataType: { $regex: new RegExp(referenceDataType), $options: "i" } };
  }

  RefServiceCodes.find(condition)
    .then(data => {
      res.json({
        code: 200,
        message: "Service Codes retrieved successfully",
        data: data
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.findAllRegion = (req, res) => {
  const regionType = req.query.regionType;
  const parentId = req.query.parentId;
  let condition = {};

  if (regionType) {
    condition.regionType = parseInt(regionType);
  }

  if (parentId) {
    condition.parentId = parseInt(parentId);
  }

  Region.find(condition)
    .then(data => {
      res.json({
        code: 200,
        message: "Region retrieved successfully",
        data: data
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving regions."
      });
    });
};

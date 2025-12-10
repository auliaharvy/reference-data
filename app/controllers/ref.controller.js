const { json } = require("express");
const db = require("../models");
const Ref = db.refs;

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
        message: "findAll",
        dataType: referenceDataType,
        refs: data,
        queryCondition: condition // Added for debugging: shows the actual query condition used
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a single Tutorial with an id
// exports.findOne = (req, res) => {
//   const id = req.params.id;

//   Ref.findById(id)
//     .then(data => {
//       if (!data)
//         res.status(404).send({ message: "Not found Tutorial with id " + id });
//       else res.send(data);
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .send({ message: "Error retrieving Tutorial with id=" + id });
//     });
// };

// Update a Tutorial by the id in the request
// exports.update = (req, res) => {
//   if (!req.body) {
//     return res.status(400).send({
//       message: "Data to update can not be empty!"
//     });
//   }

//   const id = req.params.id;

//   Ref.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
//     .then(data => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
//         });
//       } else res.send({ message: "Tutorial was updated successfully." });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error updating Tutorial with id=" + id
//       });
//     });
// };

// Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {
//   const id = req.params.id;

//   Ref.findByIdAndRemove(id, { useFindAndModify: false })
//     .then(data => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
//         });
//       } else {
//         res.send({
//           message: "Tutorial was deleted successfully!"
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Could not delete Tutorial with id=" + id
//       });
//     });
// };

// Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
//   Ref.deleteMany({})
//     .then(data => {
//       res.send({
//         message: `${data.deletedCount} Tutorials were deleted successfully!`
//       });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all tutorials."
//       });
//     });
// };

// Find all published Tutorials
// exports.findAllPublished = (req, res) => {
//   Ref.find({ published: true })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials."
//       });
//     });
// };

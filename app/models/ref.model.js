module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      code: String,
      descriptionId: String,
      descriptionEn: String,
      parameterData: Object,
      referenceDataType: String
    },
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Ref = mongoose.model("referenceData", schema, "referenceData");
  return Ref;
};

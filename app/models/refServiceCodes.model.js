module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      code: String,
      descriptionEn: String,
      descriptionId: String,
    },
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const RefServiceCodes = mongoose.model("refServiceCodes", schema, "refServiceCodes");
  return RefServiceCodes;
};

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

  const RefGoodsCodes = mongoose.model("refGoodsCodes", schema, "refGoodsCodes");
  return RefGoodsCodes;
};

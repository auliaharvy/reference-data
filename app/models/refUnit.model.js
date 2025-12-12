module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      code: String,
      description: String,
    },
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const RefUnits = mongoose.model("refUnits", schema, "refUnits");
  return RefUnits;
};

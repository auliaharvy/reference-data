module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      regionType: String,
      parentId: String,
      postalCode: String,
      name: String,
    },
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const region = mongoose.model("region", schema, "region");
  return region;
};

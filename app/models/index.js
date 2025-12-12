const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.refs = require("./ref.model.js")(mongoose);
db.refUnits = require("./refUnit.model.js")(mongoose);
db.refGoodsCodes = require("./refGoodsCodes.model.js")(mongoose);
db.refServiceCodes = require("./refServiceCodes.model.js")(mongoose);
db.region = require("./region.model.js")(mongoose);

module.exports = db;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// new schema for geolocation
const GeoSchema = new Schema({

  type: {
    type: String,
    default: "Point",
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"

  },


})
// create ninja Schema and Model

const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required"],
  },
  rank: {
    type: String,
  },
  available: {
    type: Boolean,
    default: false,

  },
  geometry: GeoSchema,

  // add a geolocation
});

const Ninja = mongoose.model('ninja', NinjaSchema); // pass the collection

module.exports = Ninja;

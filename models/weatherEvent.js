const mongoose = require("mongoose");

const weatherEventSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  nameOfWeatherEvent: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: false,
  },
  affectedAreas: {
    type: Array,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("WeatherEvent", weatherEventSchema);

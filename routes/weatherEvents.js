const express = require("express");
const router = express.Router();
const WeatherEvent = require("../models/weatherEvent");
const weatherEvent = require("../models/weatherEvent");

// ! Get all weather events.
router.get("/", async (req, res) => {
  try {
    const weatherEvents = await WeatherEvent.find();
    res.json(weatherEvents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ! Get one weather event
router.get("/:id", getWeatherEvent, (req, res) => {
  res.json(res.weatherEvent);
});

// ! Create a weather event.
router.post("/", async (req, res) => {
  const weatherEvent = new WeatherEvent({
    type: req.body.type,
    nameOfWeatherEvent: req.body.nameOfWeatherEvent,
    category: req.body.category,
    affectedAreas: req.body.affectedAreas,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
  });
  try {
    const newWeatherEvent = await weatherEvent.save();
    res.status(201).json(newWeatherEvent); // * always send 201 when using the post route instead of 200. To be specific.
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ! Updating weather event.
router.patch("/:id", getWeatherEvent, async (req, res) => {
  const propertiesToUpdate = [
    "type",
    "nameOfWeatherEvent",
    "category",
    "affectedAreas",
    "startDate",
    "endDate",
  ];

  propertiesToUpdate.forEach((prop) => {
    if (req.body[prop] != null) {
      res.weatherEvent[prop] = req.body[prop];
    }
  });

  try {
    const updatedWeatherEvent = await res.weatherEvent.save();
    res.json(updatedWeatherEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ! Delete a weather event
router.delete("/:id", getWeatherEvent, async (req, res) => {
  try {
    await res.weatherEvent.deleteOne();
    res.json({ message: "Deleted weather event!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getWeatherEvent(req, res, next) {
  /*
   * This is a middleware. It is going to be used to execute
   * the beginning of all the routes that requires "id" in the params.
   * "next" if we call this move on to the next section of the code.
   */
  let weatherEvent;
  try {
    weatherEvent = await WeatherEvent.findById(req.params.id);
    if (weatherEvent === null) {
      return res.status(404).json({ message: "Weather event does not exist." });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.weatherEvent = weatherEvent;
  next();
}
module.exports = router;

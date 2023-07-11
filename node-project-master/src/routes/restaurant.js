const express = require("express");
const { createRestaurant, getAllRestaurants } = require("../models/restaurant");
const Router = express.Router();
const {
  updateRestaurant,
  findUniqueRestaurant,
  deleteRestaurant,
} = require("../models/restaurant");

// These are all the api endpoints
Router.post("/createRestaurant", createRestaurant);
Router.get("/getAllRestaurants", getAllRestaurants);
Router.put("/updateRestaurant/:id", updateRestaurant);
Router.get("/findUniqueRestaurant/:id", findUniqueRestaurant);
Router.delete("/deleteRestaurant/:id", deleteRestaurant);

module.exports = Router;

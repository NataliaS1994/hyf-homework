const express = require("express");
const router = express.Router();
const reservations = require("../data/reservations.json");

//Respond with the json for all reservations 
router.get("/", async(request, response) => {
  try {
      response.json(reservations);
      console.log("in/api/reservations");
  } catch (error) {
      throw error;
  }
});

//Respond with the json for the reservation with the corresponding id 
router.get("/:id", async (request, response) => {
    const reservationId = parseInt(request.params.id);
    try {
        if (reservationId) {
            response.send(reservations.filter(reservation => reservation.id === reservationId));
        }
    }
    catch (error) {
        throw error;
    }
});
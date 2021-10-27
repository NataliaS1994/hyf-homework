const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reviews = require("./data/reviews");
const reservations = require("./data/reservations");

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing App");
});

//Respond with the json for all the meals 
app.get("/meals", async (request, response) => {
  response.send(mealsWithReview);
});

//For each meal, if there are reviews matching it's meal ID
const mealsWithReview = meals.map((meal) => {
  meal.reviews = [];
  reviews.filter((review) => {
    if(meal.id === review.mealId) {
      meal.reviews.push(review);
    }
  })
  return meal;
})
// Respond with the json for all the meals (including it's reviews) that are cheap
app.get("/cheap-meals", async (request, response) => {
  const cheapMeal = meals.filter((meals) => meals.price < 80);
  response.send(cheapMeal);
});

//Respond with the json for all the meals (including it's reviews) that can fit lots of people
app.get("/large-meals", async (request, response) => {
  const largeMeal = meals.filter((meal) => meal.maxNumberOfGuests > 6);
  response.send(largeMeal);
});

//Respond with the json for a random meal (including it's reviews)
app.get("/meal", async (request, response) => {
  const randomNumber = Math.floor(Math.random() * meals.length);
  const randomMeal = mealsWithReview[randomNumber];
  response.send(randomMeal);
});

//Respond with the json for all reservations
app.get("/reservations", async (request, response) => {
  response.send(reservations);
});

//Respond with the json for a random reservation
app.get("/reservation", async (request, response) => {
  const randomNumber = Math.floor(Math.random() * reservations.length);
  const randomReservation = reservations[randomNumber];
  response.send(randomReservation);
});

module.exports = app;

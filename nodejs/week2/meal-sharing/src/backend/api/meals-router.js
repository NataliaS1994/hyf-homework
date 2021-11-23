const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/", async(request, response) => {
    try {
        console.log(meals);
        console.log("in /api/meals");
        const query = request.query;
        if (query.maxPrice) {

            //Parameters: maxPrice (Get meals that has a price smaller than maxPrice)
            response.send(meals.filter(meal => meal.price <= query.maxPrice));
        } else if (query.title) {

            //Parameters: Title (Get meals that partially match a title)
            response.send(meals.filter(meal => meal.title.toLowerCase().includes(query.title)));
        } else if (query.createdAfter) {

            //Parameters: Created after (Get meals that has been created after the date)
            response.send(meals.filter(meal => new Date(meal.createdAt) > new Date(query.createdAfter)));
        } else if (query.limit) {

            //Parameters: Limit (Only specific number of meals)
            response.send(meals.slice(0, query.limit));
        }
    } catch (error) {
        throw error;
    }
});

module.exports = router;
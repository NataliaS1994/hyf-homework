const express = require("express");
const router = express.Router();

const reviews = require("../data/reviews.json");

// Respond with the json for all reviews 
router.get("/", async (request, response) => {
    try {
        console.log("in /api/reviews");
        response.send(reviews);
    } catch (error) {
        throw error;
    }
});

// Respond with the json for the review with the corresponding id
router.get("/:id", async (request, response) => {
    const reviewId = parseInt(request.params.id);
    try {
        if (reviewId) {
            response.send(reviews.filter(review => review.id === reviewId));
        }
    }
    catch (error) {
        throw error;
    }
});

module.exports = router;
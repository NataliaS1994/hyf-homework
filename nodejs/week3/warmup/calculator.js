const e = require("express");
const express = require("express");
const app = express();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(
        express.urlencoded({
            extended: true
        })
    )
    // Parse JSON bodies (as sent by API clients)
app.use(express.json())

app.get("/", async(request, response) => {
    try {
        console.log("this is a calculator");
        response.send("Let's get some calculations done");
    } catch (error) {
        throw error;
    }
});

// GET section
app.get("/add", (request, response) => {
    const result = Object.values(request.query)
        .flat()
        .reduce((a, b) => Number(a) + Number(b), 0);
    response.send(`This is the result ${result}`);
});

app.get("/sub", (request, response) => {
    const result = Object.values(request.query)
        .flat()
        .reduce((a, b) => Number(a) - Number(b));
    response.send(`This is the result ${result}`);
});

app.get("/multiply", (request, response) => {
    let result = Object.values(request.query)
        .flat()
        .reduce((a, b) => Number(a) * Number(b));
    response.send(`This is the result ${result}`);
});

app.get("/divide", (request, response) => {
    let result = Object.values(request.query)
        .flat()
        .reduce((a, b) => Number(a) / Number(b));
    response.send(`This is the result ${result}`);
});

// POST section

app.post("/add", (request, response) => {
    const result = Object.values(request.query)
        .flat()
        .reduce((a, b) => Number(a) + Number(b), 0);
    response.send(`This is the result ${result}`);
});

app.post("/sub", (request, response) => {
    const result = Object.values(request.query)
        .flat()
        .reduce((a, b) => Number(a) - Number(b));
    response.send(`This is the result ${result}`);
});

app.post("/multiply", (request, response) => {
    let result = Object.values(request.query)
        .flat()
        .reduce((a, b) => Number(a) * Number(b));
    response.send(`This is the result ${result}`);
});

app.post("/divide", (request, response) => {
    let result = Object.values(request.query)
        .flat()
        .reduce((a, b) => Number(a) / Number(b));
    response.send(`This is the result ${result}`);
});

module.exports = app;
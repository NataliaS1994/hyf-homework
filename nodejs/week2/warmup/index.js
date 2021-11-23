const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));

//GET /numbers/add?first=<number here>&second=<number here>. In response send sum (first + second).
app.get("/numbers/add", (request, response) => {
    const query = request.query;
    response.send(`Sum of two numbers: ${query.firstNumber} and ${query.secondNumber} is = ${parseInt(query.firstNumber) + parseInt(query.secondNumber)}`);
})
//GET /numbers/multiply/<first number here>/<second number here>. in response send multiplication (first * second).
app.get("/numbers/multiply/:firstNumber/:secondNumber", (request, response) => {
    const firstNumber = parseInt(request.params.firstNumber);
    const secondNumber = parseInt(request.params.secondNumber);
    response.send(`Multiplication of two numbers: ${firstNumber} and ${secondNumber} is = ${firstNumber * secondNumber}`);
})

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("nodejs week3 homework"));

//Using GET
app.get("/add/:num1/:num2", (req, res) => {
    const num1 = parseInt(req.params.num1)
    const num2 = parseInt(req.params.num2)
    let sum = (num1 + num2).toString()
    res.send(sum)
  })

  app.get("/subtract/:num1/:num2", (req, res) => {
    const num1 = parseInt(req.params.num1)
    const num2 = parseInt(req.params.num2)
    let difference = (num1 - num2).toString()
    res.send(difference)
  })

  app.get("/multiply/:num1/:num2", (req, res) => {
    const num1 = parseInt(req.params.num1)
    const num2 = parseInt(req.params.num2)
    let product  = (num1 * num2).toString()
    res.send(product)
  })

  app.get("/divide/:num1/:num2", (req, res) => {
    const num1 = parseInt(req.params.num1)
    const num2 = parseInt(req.params.num2)
    let quotient  = (num1 / num2).toString()
    res.send(quotient)
  })

//Using POST
app.post("/add/:num1/:num2", (req, res) => {
    const num1 = parseInt(req.params.num1)
    const num2 = parseInt(req.params.num2)
    let sum = (num1 + num2).toString()
    res.send(sum)
  })

  app.post("/subtract/:num1/:num2", (req, res) => {
    const num1 = parseInt(req.params.num1)
    const num2 = parseInt(req.params.num2)
    let difference = (num1 - num2).toString()
    res.send(difference)
  })

  app.post("/multiply/:num1/:num2", (req, res) => {
    const num1 = parseInt(req.params.num1)
    const num2 = parseInt(req.params.num2)
    let product  = (num1 * num2).toString()
    res.send(product)
  })

  app.post("/divide/:num1/:num2", (req, res) => {
    const num1 = parseInt(req.params.num1)
    const num2 = parseInt(req.params.num2)
    let quotient  = (num1 / num2).toString()
    res.send(quotient)
  })

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));

//localhost:3000/add/[number]/[number]
//localhost:3000/subtract/[number]/[number]
//localhost:3000/multiply/[number]/[number]
//localhost:3000/divide/[number]/[number]
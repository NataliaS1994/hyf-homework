const express = require("express");
const app = express();
const router = express.Router();
const calculator = require("./calculator");

app.get("/", (req, res) => res.send("nodejs week3 hw"));
app.use(express.json());

app.use("/api", router);
router.use("/calculator", calculator);

app.listen(3000, () => console.log(`listening on port 3000`));

module.exports = app;
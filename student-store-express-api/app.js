// YOUR CODE HERE

const express = require("express");
const app = express();
const morgan = require("morgan");
const storeRouter = require("./Route/storeRoute");


app.use(morgan("tiny"));
app.use(express.json());
app.use("/store", storeRouter);

app.get("/", (req, res) => {
  res.send({ ping: "pong" });
});

module.exports = app;

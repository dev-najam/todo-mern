const express = require("express");
const app = express();
// const dotenv = require("dotenv");
require("dotenv").config();
const mongoose = require("mongoose");

// dotenv.config({ path: "./.env" });
const PORT = process.env.PORT;
const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    // useNewUrlPrser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => {
    console.log("connection seccessful");
  })
  .catch((err) => {
    console.log("no connection");
  });

const middleware = (req, res, next) => {
  console.log(`middleware`);
  next();
};

app.get("/", (req, res) => {
  res.send(`hello world`);
});

app.get("/najam", middleware, (req, res) => {
  res.send(`About`);
});

app.get("/contact", (req, res) => {
  res.send(`Contact`);
});

app.get("/signin", (req, res) => {
  res.send(`Sign in`);
});

app.get("/signup", (req, res) => {
  res.send(`signup`);
});

app.listen(PORT, (req, res) => {
  console.log(`server is running at ${PORT}`);
});

const express = require("express");
const morgan = require("morgan");
const app = express();
const mongo = require("./db");
const bodyParser = require("body-parser");

app.use(morgan("tiny"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/restaurant", require("./src/routes/restaurant"));

mongo.connect(() => {
  app.listen(3000, () => {
    console.log(`listening to port : ${3000}`);
  });
});
